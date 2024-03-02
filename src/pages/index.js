import React, { useState, useEffect } from "react";
import View from "../components/Slideshow";
import ProductCard from "../components/Product/ProductCard";

const URL = process.env.REACT_APP_API_URL

const Home = () => {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        //console.log(products)
        fetch(URL + "/api/getAll")
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((err) => console.log(err))
        
    }, [])


    
    
    //document.body.addEventListener("load", getProducts(), {options: {passive: true}})
    
    return (
        <div
            style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: "center",
            }}
        >
            <h1>Bienvenido a Cacharrería Los Marinillos - Pereira</h1>
            <View/>
            <ProductCard products={products} setProducts={setProducts}/>
        </div>
    );
};

export default Home;
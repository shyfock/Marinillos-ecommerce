import React, { useEffect, useRef } from "react";
import * as bootstrap from "bootstrap"

window.bootstrap = bootstrap;

const URL = process.env.REACT_APP_API_URL

const ProductCard = (props) => {
    const {products, setProducts} = props;
    const ref = useRef([...products]);
    ref.current = [...products];
    console.log(ref.current)
    fetch(URL + "/addImages/" + "6480c520b66190c424455b62")
    .then(res => res.json())
    .then(data => console.log(data))

    useEffect(() => { 
        ref.current.forEach(
            (product, index) => {
                fetch(URL + "/addImages/" + product._id)
                    .then(res => res.json())
                    .then(data => (prevProducts => setProducts({
                        ...prevProducts, 
                        products,
                        {...prevProducts,
                            {images : data}}})))
                    .catch(err => console.log(err))
            }
        )
    }, [products])

    console.log(ref.current)

    function currencyFormatter({ currency, value }) {
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            minimumFractionDigits: 2,
            currency
        })
        return formatter.format(value)
    }

    console.log({prod: products})
    
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4" >
            {products && products.map((product, index) => {
                return(
                    <div className="col" key={index}>
                        <div className="card h-100">
                            <div id={`carouselIndicators-${index}`} className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-indicators">
                                    {product["images"].map((image, j) => {
                                        return(
                                            <button 
                                                type="button" 
                                                data-bs-target={`#carouselIndicators-${index}`}
                                                data-bs-slide-to={j}
                                                key={j}
                                                aria-label={`Slide ${j + 1}`}
                                                {...j === 0 ? {"className":"active", "aria-current": "true"} : ""}
                                            ></button>

                                        )
                                    })}
                                </div>
                                <div className="carousel-inner w-100">
                                    {product["images"].map((img, i) => {
                                        return(
                                            <div {...i === 0 ? {"className":"carousel-item active"} : {"className":"carousel-item"}} key={i} >
                                                <img loading="lazy-once" src={img.url} className="d-block h-50 w-100" alt={img.name} />
                                            </div>
                                        )
                                    })}
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target={`#carouselIndicators-${index}`} data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target={`#carouselIndicators-${index}`} data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">{product.description}</p>
                                <span>PRECIO</span>
                                <p>
                                    {currencyFormatter({
                                        currency: "COP",
                                        value: product.price
                                    })}
                                </p>
                            </div>
                            <div className="card-footer">
                                <div className="row">
                                <small className="text-muted">{product.available ? `${product.stock} unds` : "No disponible"}</small>
                                <a href="/" className="btn btn-success">Añadir</a>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
};

export default ProductCard;
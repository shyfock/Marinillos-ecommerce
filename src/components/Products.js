import React, { useState } from "react";
import Product from "./Product/CreateProduct";
import UploadImages from "./UploadImages";

function Products() {
    const [prodCreated, setProdCreated] = useState(false);
    const [productId, setProductId] = useState("");
    return (
        <>
            <Product
                prodCreated={prodCreated} 
                setProdCreated={setProdCreated} 
                productId={productId}
                setProductId={setProductId}
            />
            {prodCreated && <UploadImages productId={productId}/>}
        </>
    )
}

export default Products;
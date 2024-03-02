import React from "react";
import { useState } from "react";

const URL = process.env.REACT_APP_API_URL + '/api/post';

const Product = ({ prodCreated, setProdCreated, productId, setProductId }) => {
    const [state, setState] = useState([{
        name: "",
        price: 0,
        productRef: "",
        stock: 0,
        description: "",
        category: ""
    }])

    const categories = [
        "Hogar",
        "Decoración",
        "Juguetería",
        "Piñatería",
        "Navidad"
    ]

    function handleSelect(e) {
        e.preventDefault();
        e.stopPropagation();
        //setState(() => ({...state, category: document.getElementById("inputGroupSelect01").value}))
        console.log(document.getElementById("inputGroupSelect01").value)
    }

    function handleClick(e) {
        // console.log(...state)
        const data = {
            name: state.name,
            price: state.price,
            productRef: state.productRef,
            stock: state.stock,
            description: state.description,
            category: state.category
        }
        //console.log(data)
        e.preventDefault();
        e.stopPropagation();
        fetch(URL, {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json"
            },
            redirect: "follow",
            referrerPolicy: "no-referrer",
            body: JSON.stringify(data),
        })
        .then((res) => {
            alert(res.ok ? `Producto creado: ${res.statusText}` : `Error creando el producto: ${res.statusText}`)
            return res.json()
        })
        .then(data => {
            console.log(data._id)
            setProductId(() => data._id)
            return (
                data._id ? setProdCreated(() => true) : setProdCreated(() => false)
                // setProductId(data._id)
            )
        })
        .catch((err) => {
            console.log(err);
        })
    }

    return (
        <div className="container">
            <form 
                // action={URL} 
                method="POST" 
                className="mb-4" 
                target="_blank" 
                rel="noopener noreferrer" 
                // onSubmit={(e) => {alert(`Producto creado ${e.target[0].value}`); console.log(e)}}
                id="product-form"
            >
                <h4>Crear producto</h4>
                <div className="form-group mb-3">
                    <label className="form-label" htmlFor="name">Información del producto</label>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Nombre</span>
                        <input
                            className="form-control"
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Nombre del producto"
                            aria-label="Nombre del producto"
                            aria-describedby="basic-addon1"
                            //value={state.name}
                            onChange={(e) => {setState({...state, name: e.target.value})}}
                        />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon3">Referencia</span>
                        <input
                            className="form-control" 
                            type="text" id="productRef" 
                            name="productRef" 
                            placeholder="Referencia (única)" 
                            aria-label="Referencia (única)" 
                            aria-describedby="basic-addon3" 
                            //value={state.productRef}
                            onChange={(e) => {setState({...state, productRef: e.target.value})}} 
                        />
                        <label className="input-group-text" htmlFor="inputGroupSelect01">Categoría</label>
                        <select 
                            className="form-select"
                            id="inputGroupSelect01"
                            defaultValue="0"
                            required
                            onChange={handleSelect}
                        >
                            <option value="0">Seleccione una categoría</option>
                            {categories.map((item, index) => {
                                return (
                                    <option value={item} key={index}>{item}</option>
                                )
                            })}
                        </select>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon4">Precio | $</span>
                        <input 
                            className="form-control"
                            type="text" 
                            id="price" 
                            name="price" 
                            aria-describedby="basic-addon4 basic-addon5" 
                            //value={state.price}
                            onChange={(e) => {setState({...state, price: parseInt(e.target.value)})}} 
                        />
                        <span className="input-group-text" id="basic-addon5">.00</span>
                        <span className="input-group-text">Stock</span>
                        <input 
                            className="form-control" 
                            type="text" 
                            id="stock" 
                            name="stock" 
                            onChange={(e) => {setState({...state, stock: parseInt(e.target.value)})}}
                            //value={state.stock}
                        />
                        <span className="input-group-text">Unidades</span>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text">Descripción</span>
                        <textarea 
                            className="form-control" 
                            id="description" 
                            name="description" 
                            rows="3" 
                            aria-label="Descripción" 
                            onChange={(e) => {setState({...state, description: e.target.value})}} 
                            //value={state.description}
                        >
                        </textarea>
                    </div>
                </div>
                <button 
                    type="submit" 
                    className="btn btn-primary"
                    onClick={handleClick}
                >
                    Crear Producto
                </button>
            </form>
        </div>
    )
}

export default Product;
import React from "react";

const Blogs = () => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'Right',
                alignItems: 'Center',
                height: '100vh'
            }}
        >
            <h1>Cacharrería Los Marinillos - Pereira</h1>
            <h2>Blogs</h2>
            <ul>
                <li>Nuevos Productos</li>
                <li>Productos Estrella</li>
                <li>Comentarios de Nuestros Clientes</li>
            </ul>
        </div>
    );
};

export default Blogs;
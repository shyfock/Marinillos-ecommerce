import React from "react";

const Categories = () => {
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
            <h1>Cacharrería Los Marinillos -Pereira</h1>
            <h3>Categorías</h3>
            <ul>
                <li>Hogar</li>
                <li>Decoración</li>
                <li>Juguetería</li>
                <li>Piñatería</li>
                <li>Navidad</li>
            </ul>
        </div>
    );
};

export default Categories;
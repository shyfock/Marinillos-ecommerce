import React from "react";

const Quote = () => {
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
            <h3>Cotizar nuestros productos</h3>
            <ul>
                <li>Mayoristas</li>
                <li>Menudeo</li>
            </ul>
        </div>
    );
};

export default Quote;
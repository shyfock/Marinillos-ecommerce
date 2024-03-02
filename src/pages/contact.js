import React from "react";

const Contact = () => {
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
            <h2>Contáctanos</h2>
            <ul>
                <li>WhatsApp</li>
                <li>Redes Sociales
                    <ul>
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>TikTok</li>
                        <li>YouTube</li>
                    </ul>
                </li>
            </ul>
        </div>
    );
};

export default Contact;
import React from "react";
import '../styles/Boton.css';

interface BotonProps {
    botones: Array<{ imagen: string; nombre: string }>;
}

export const Boton: React.FC<BotonProps> = ({ botones }) => {
    return (
        <>
            {botones.map(({ imagen, nombre }) => (
                <button key={nombre} className="btnInicial">
                    <img src={imagen}/>
                    <label>{nombre}</label>
                </button>
            ))}
        </>
    );
};


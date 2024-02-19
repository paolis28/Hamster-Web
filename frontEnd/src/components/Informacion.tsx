import React from 'react';

interface InformacionProps{
    CuadrosInformacion:Array<{imagen:string; nombre:string; descripcion:string}>
}

export const Informacion: React.FC<InformacionProps> = ({CuadrosInformacion})=>{
    return(
        <>
            {CuadrosInformacion.map(({imagen, nombre,descripcion})=>(
                <div>
                    <img src={imagen}/>
                    <h3>{nombre}</h3>
                    <p>{descripcion}</p>
                </div>
            ))}
        </>
    );
}
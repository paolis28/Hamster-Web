import React from "react";
import {Navbar} from '../components/Navbar';
import {Boton} from '../components/Boton';
import { Informacion } from "../components/Informacion";
import imgCamara from '../assets/img/imgCamara.png';
import imgDispensador from '../assets/img/imgDispensador.png';
import imgBascula from '../assets/img/imgBascula.png';
import '../styles/Inicio.css';

const botones = [
    { imagen: imgCamara, nombre: 'Monitoreo' },
    { imagen: imgDispensador, nombre: 'Dispensador' },
    { imagen: imgBascula, nombre: 'Calculador' }
];

const CuadrosInformacion=[
    {imagen:imgCamara, nombre:"Monitoreo", descripcion:"Por medio del equipo de vigilancia que se instala en la casa del Hamster, puede acceder a la grabación en tiempo real y mantener la seguridad de que su Hamster se escuentra bien."},
    {imagen:imgDispensador, nombre:"Dispensador", descripcion:"Deja de preouparte de la comida de tu Hamster cuando no estes en casa, mejor deja que el sistema Hamster-Web se encargue, despachará comida a la hora que indiques."},
    {imagen:imgBascula, nombre:"Calculador", descripcion:""}
]

const Inicio = ()=>{
    return(
        <>
            <Navbar/>
            <div className="divBotones">
                <Boton botones={botones} />
            </div>
            <div className="informacion">
                <Informacion CuadrosInformacion={CuadrosInformacion}/>
            </div>
        </>
    );
} 

export default Inicio
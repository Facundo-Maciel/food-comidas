//requisitos:
//nombre de pagina
//imagen de la pagina
//botton que redireccione Home

import React from "react";
import Style from "../LandingPage/LandingPage.Module.css";
import { Link } from "react-router-dom"; //maneja todas las rutas de la aplicacion

export default function ReturnLandingPage(){

    return (

        <div>
             <h1 className={Style.title}>FACU FOODS</h1>

             <Link to="/home"><button className={Style.button}>enter</button></Link>

             <p className={Style.parrafo}> Pagina de comidas , recetas y dietas </p>

        </div>

    )

}


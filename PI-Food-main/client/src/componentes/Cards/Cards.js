import React from "react";
import Style from "../Cards/Cards.Module.css";


export default function Cards({title , image , diets}){

    return(
        <div className= {Style.ContenedorPrincipal}>
            <div className={Style.ContenedorCard}>
                   <img className={Style.ImageCard} src= {image}/>
             <div>
                <h1>{title}</h1>
                <h2>Diets type:</h2>
                <h3>{diets}</h3>
             </div>
            </div> 
        </div>
    )

}


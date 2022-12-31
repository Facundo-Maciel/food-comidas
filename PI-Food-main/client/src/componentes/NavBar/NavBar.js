import React from "react";
import { Link } from "react-router-dom"; 
import Style from "../NavBar/NavBar.Module.css";

//importamos componentes
import SearchBar from "../SearchBar/SearchBar";

export default function NavBar(){

    //nombre de la aplicacion
    //search
    return(
        <div className={Style.divEstile}>
     
        <div >
          
            <a className={Style.tituloEstile}>  <Link to="/"> FACU FOODS </Link> </a>  
        
        </div>
        <SearchBar /> 
        </div>
    )


}
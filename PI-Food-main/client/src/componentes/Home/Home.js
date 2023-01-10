import React from "react";
import { Link } from "react-router-dom";
import Style from "../Home/Home.Module.css";
import { useEffect , useState } from "react";
import {useDispatch, useSelector} from "react-redux";

//importacion de acciones
import {GetRecipe} from "../../redux/actions/index";

//importacion de componentes utilizados en la home
import NavBar from "../NavBar/NavBar";
import Cards from "../Cards/Cards";

export default function ReturnHome(){

    const dispatch = useDispatch()
    const allRecipes = useSelector ((state)=> state.Recipes)

    useEffect( ()=>{
        dispatch(GetRecipe())
    },[dispatch])

//Handlers

function HandlerClick(){

    dispatch(GetRecipe())
}
    return(

        <div>
            <div>
                
                <NavBar/>
                
            </div>


            <div>{

             allRecipes?allRecipes.map(info=>{
            return(

          <Cards title={info.title} image={info.image} diets={info.diets}/>

            ) 

             })
                : <div>
                        <h1> ERROR!</h1>
                </div>

                }

            </div>
        </div>
        )
}
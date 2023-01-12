import React from "react";
import { Link } from "react-router-dom";
import Style from "../Home/Home.Module.css";
import { useEffect , useState } from "react";
import {useDispatch, useSelector} from "react-redux";

import Styles from "../Home/Home.Module.css"

//importacion de acciones
import { filterRecipesByTypeDiet , GetRecipe , TidyAlphabetically } from "../../redux/actions/index";

//importacion de componentes utilizados en la home
import NavBar from "../NavBar/NavBar";
import Cards from "../Cards/Cards";

export default function ReturnHome(){

    const dispatch = useDispatch()
      const[order,setOrder] =useState('')  
    const allRecipes = useSelector ((state)=> state.Recipes)

    useEffect( ()=>{
        dispatch(GetRecipe())
    },[dispatch])

    
//Handlers

function handleFilterTypeDiet (e) {
    e.preventDefault();
    dispatch(filterRecipesByTypeDiet(e.target.value))
    setOrder(`ordenado ${e.target.value}`)
    
}

function handleFilterTidy (e) {
    e.preventDefault();
    dispatch(TidyAlphabetically())
    
    
  }

// function handleFilterTidyScore (e) {
//   e.preventDefault();
//   dispatch(TidyScore(e.target.value))
//   setOrder(`ordenado ${e.target.value}`)
  
//  }

    return(

        <div>
            <div>
                
                <NavBar/>

                <div>

                 <select onChange={e => handleFilterTypeDiet(e)} className = {Styles.TypeDiets}>
                       <option value="all"> TypesDiets </option>
                       <option value="gluten free">Gluten Free</option>
                        <option value="ketogenic">Ketogenic</option>
                        <option value="vegan">Vegetarian </option>
                       <option value="lacto ovo vegetarian">Ovo-Vegetarian</option>
                        <option value="pescatarian">Pescatarian</option>
                         <option value="paleolithic">Paleolithic</option>
                          <option value="primal">Primal</option>
                          <option value="whole 30">Whole 30</option>
                          <option value="fodmap friendly">fodmapfriendly</option>
                  </select>

              </div>

                <div>
                      <select onChange={e => handleFilterTidy(e)} className = {Styles.TypeDiets}>
                         <option selected hidden>Alphabetic</option>
                         <option value="asc"> A to Z </option>
                        <option value="descendente">Z to A</option>
                     </select>

                </div>
                
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
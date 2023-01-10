import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom"; 
import {useDispatch, useSelector} from "react-redux";

import Styles from "../FilterButton/FilterButton.Module.css"

//importacion de acciones
import {filterRecipesByTypeDiet , TidyAlphabetically , TidyScore } from "../../redux/actions/index";


export default function FilterButton(){

    const dispatch = useDispatch()

    const[order,setOrder] =useState('')  

    function handleFilterTypeDiet (e) {
        e.preventDefault();
        dispatch(filterRecipesByTypeDiet(e.target.value))
        setOrder(`ordenado ${e.target.value}`)
        
    }

    function handleFilterTidy (e) {
      e.preventDefault();
      dispatch(TidyAlphabetically(e.target.value))
      setOrder(`ordenado ${e.target.value}`)
      
    }

  function handleFilterTidyScore (e) {
    e.preventDefault();
    dispatch(TidyScore(e.target.value))
    setOrder(`ordenado ${e.target.value}`)
    
   }



    return(

       <div>
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

                   <select onChange={e => handleFilterTidy(e)} className = {Styles.TypeDiets}>
                   <option selected hidden>Alphabetic</option>
                   <option value="A to Z"> A to Z </option>
                  <option value="Z to A">Z to A</option>
                   
                   </select>

                   <select onChange={e => handleFilterTidyScore(e)} className = {Styles.TypeDiets}>
                     <option value="Min"> Min </option>
                     <option value="Max"> Max</option>
                   </select>



              </div>

       </div>

        
    )

}
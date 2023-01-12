import axios from "axios";

// /*~~~~~~~~~~~~~~GETS~~~~~~~~~~~~~~*//
// //conecciones front y back//

//funcion para traer todas las recetas del back

export function GetRecipe(){

  return async function (dispatch){
    let Json = await axios.get(`http://localhost:3001/recipes/`)
    dispatch({
        type: "GET_RECIPE",
        payload: Json.data 
    })
  }

}

export function filterRecipesByTypeDiet (payload){
  
  return {
      type : "FILTER_BY_TYPEDIET",
      payload
  }

}

export function TidyAlphabetically (payload){
  
  return {
      type : "ORDER_BY_NAME",
      payload
  }

}

// export function TidyScore (payload){
  
//   return {
//       type : 'TIDY_SCORE',
//       payload
//   }

// }


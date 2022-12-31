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


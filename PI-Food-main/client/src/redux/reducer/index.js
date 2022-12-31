const InicialState = {

    Recipes: []
}


export default function rootReducer(state = InicialState, action) {

    switch(action.type){
        case "GET_RECIPE": 
        return{
            ...state,
            Recipes: action.payload
        }

        default:{
            return state
            }

    }
   

}
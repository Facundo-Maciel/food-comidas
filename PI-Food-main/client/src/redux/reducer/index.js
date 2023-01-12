const InicialState = {

    Recipes: [],
    RecipesCopy: []
}


export default function rootReducer(state = InicialState, action) {

    switch(action.type){

        case "GET_RECIPE": 
        return{
            ...state,
            Recipes: action.payload,
            RecipesCopy: action.payload
        }

        case 'ORDER_BY_NAME' :
           let order = action.payload === 'asc' ? 
              state.Recipes.sort(function(a,b) {

                  if(a.title.toLowerCase() > b.title.toLowerCase()) {

                      return 1
                  }
                  if( b.title.toLowerCase() > a.title.toLowerCase()){
                      return -1
                  }
                  return 0
              }) : 
              state.Recipes.sort(function(a,b) {
                  if(a.title.toLowerCase() > b.title.toLowerCase()) {
                      return -1
                  }
                  if( b.title.toLowerCase() > a.title.toLowerCase()){
                      return 1
                  }
                  return 0
              })
              return{
                  ...state ,
                  Recipes : order
              }
    
            // case 'TIDY_SCORE':
             
            // let TidyScore = action.payload === 'min' ?
    
            // state.Recipes.sort(function(a,b) {
                      
            //     if(a.healthScore.toLowerCase() > b.healthScore.toLowerCase()) {
                  
            //         return 1
            //     }
            //     if( b.healthScore.toLowerCase() > a.healthScore.toLowerCase()){
            //         return -1
            //     }
            //     return 0
            // }) : 
            // state.Recipes.sort(function(a,b) {
            //     if(a.healthScore.toLowerCase() > b.healthScore.toLowerCase()) {
            //         return -1
            //     }
            //     if( b.healthScore.toLowerCase() > a.healthScore.toLowerCase()){
            //         return 1
            //     }
            //     return 0
            // })
            // return{
            //     ...state ,
            //     Recipes : TidyScore
            // }

        case "FILTER_BY_TYPEDIET":
        const AllRec = state.RecipesCopy

        const TypeDietsFilter = action.payload === "all"? AllRec : AllRec?.filter( (t) => t.diets.includes(action.payload) )

        return{
            ...state,
            Recipes: TypeDietsFilter
        }


        default:{
            return state
        }

    }
   

}
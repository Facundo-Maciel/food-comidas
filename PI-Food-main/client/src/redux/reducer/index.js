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

        case "FILTER_BY_TYPEDIET":
        const AllRec = state.RecipesCopy

        const TypeDietsFilter = action.payload === "all" ? AllRec : AllRec ?.filter( (t) => t.diets.includes(action.payload) )

        return{
            ...state,
            Recipes: TypeDietsFilter
        }

        case "TIDY_ALPHABETICALLY":
        let Tidy = action.payload === "A to Z" ?
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
            Recipes : Tidy
        }

        case "TIDY_SCORE":
         
        let TidyScore = action.payload === "Min" ?

        state.Recipes.sort(function(a,b) {
                  
            if(a.healthScore.toLowerCase() > b.healthScore.toLowerCase()) {
              
                return 1
            }
            if( b.healthScore.toLowerCase() > a.healthScore.toLowerCase()){
                return -1
            }
            return 0
        }) : 
        state.Recipes.sort(function(a,b) {
            if(a.healthScore.toLowerCase() > b.healthScore.toLowerCase()) {
                return -1
            }
            if( b.healthScore.toLowerCase() > a.healthScore.toLowerCase()){
                return 1
            }
            return 0
        })
        return{
            ...state ,
            Recipes : TidyScore
        }


        


        default:{
            return state
        }

    }
   

}
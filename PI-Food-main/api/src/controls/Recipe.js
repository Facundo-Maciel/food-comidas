const {GetAllInfoRecipes, GeIdRecipesId} = require("./Utils");

const GetRecipe = async(req , res) =>{

    try{
        const title = req.query.title
        let RecipeTotal = await GetAllInfoRecipes()

        if(title){
            let RecipeTitle = await RecipeTotal.filter(t => t.title.toLowerCase().includes(title.toLowerCase()))
            RecipeTitle.length 
            ? res.status(200).send(RecipeTitle) 
            : res.stauts(400).send("RECETA NO ENCONTRADA :C")
        }else{
            res.status(200).send(RecipeTotal)
        }
    }catch(error){
        res.stauts(400).send({errorMsg: error})
    }

}

const GetRecipeID = async(req , res) =>{

    try{
        const {id} = req.params
        let recipeId = await GeIdRecipesId(id)
        res.json(recipeId)
    }catch(error){
        res.stauts(500).send(error.message);
    }

}

module.exports = {

    GetRecipe 

}
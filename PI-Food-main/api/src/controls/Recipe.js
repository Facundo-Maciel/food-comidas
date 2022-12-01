const {GetAllInfoRecipes, GeIdRecipesId} = require("./Utils");
const {Recipe , Diet } = require("../db");

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
            res.status(200).send(RecipeTotal);
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

 const CreatePostRecipe = async(req , res) =>{

    //input = tipo de dato para recibir datos

    try{

        const {  title,  summary,  healthScore,  steps, image, diet } = req.body

        let NewRecipe = await Recipe.create({

            title,  
            summary,  
            healthScore,  
            steps, 
            image

        })

        let NewDiet = await Diet.findAll({where: {name: diet}}) 

        NewRecipe.addDiet(NewDiet);

        res.status(200).send("receta creada")

    }catch(error){

        console.log(error)

    }

 }

module.exports = {

    GetRecipe,
    GetRecipeID, 
    CreatePostRecipe,

}
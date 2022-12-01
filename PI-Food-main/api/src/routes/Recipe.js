const router = require("express").Router();

const {
    
    GetRecipe,
    GetRecipeID,
    CreatePostRecipe,

} = require("../controls/Recipe");

router.get("/recipes",GetRecipe);//obtener todas las recetas (o una, por el nombre pasado via query)
router.get("/recipes/:id",GetRecipeID);
router.post("/recipes",CreatePostRecipe);



module.exports = router;
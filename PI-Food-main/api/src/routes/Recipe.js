const router = require("express").Router();
const {GetRecipe} = require("../controls/Recipe");



router.get("/recipes",GetRecipe);//obtener todas las recetas (o una, por el nombre pasado via query)













module.exports = router;
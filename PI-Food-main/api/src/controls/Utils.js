//UNA FUNCIÓN ASINCRONICA DEPENDE DE OTRA FUNCION PARA FUNCIAR
//EL AWAIT ESPERA UNA FUNCION Y RECIÉN AHIO FUNCIONA

//AXIOS LLAMA A LA BASE DE DATOS de API, trae informacion
//api = base de datos externa

const axios = require("axios");
const {Recipe , Diet} = require("../db"); //traemos Recipe y Diet para poder trabajar con la base de datos

const {API_KEY2, API_KEY, API_KEY3, API_KEY4, API_KEY5,API_KEY6, API_KEY7} = process.env;

//CREACION DE TODAS LAS FUNCIONES PARA APLICAR EN SUS RECPECTIVOS CONTROLES DE DIETS  Y RECIPE

//la funcion normal siempre lleva return
//la funcion flecha se retorna siempre sin necesidad de un return
const getApiInfoFood = async () => {
    let UrlApi = (await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=10`)).data.results
    const ApiInfo = UrlApi.map((info) =>{
        return {
            id: info.id,
            title: info.title,
            summary: info.summary,
            healthScore: info.healthScore,
            steps: info.analyzedInstructions[0] ? info.analyzedInstructions[0].steps.map(e=> e.step) : ['No se encontro un 🦶 a 🦶 (┬┬﹏┬┬)'],
            image: info.image,
            diet: info.diets
        }
    })

    return ApiInfo
}

//funcion para obtener informacion de receta de DataBase.

const  GetInfoDbRecipe = async () =>{
    let GetInfoDiet = await Recipe.findAll({ //encuentra todo
        include:{
            model: Diet,
            attributes: ["name"],
            through: {attributes: []} //una tabla de los atriburos, array vacio para ingresar datos
        }
    })
    return GetInfoDiet.map(recipe =>{
      let type = recipe.diets.map(d =>d.name)
      return {id:recipe.id,
              title:recipe.title,
              healthScore:recipe.healthScore, 
              image: recipe.image||"https://images2.alphacoders.com/105/thumb-1920-1051199.png",
              diets: type,
              score: recipe.spoonacularScore,  
              dishTypes:recipe.dishTypes, 
              sumary: recipe.sumary, 

      }
    })
 };

 //funcion de concatenacion de receta de la api y de las recetas creadas en dataBase

 const GetAllInfoRecipes = async () =>{

    const InfoApi = await getApiInfoFood();
    const InfoDb = await GetInfoDbRecipe();
    const InfoAll = InfoApi.concat(InfoDb);

    return InfoAll;

 }


 //Funcion para buscar en DB y API una receta mediante su id........ 
   
 const GeIdRecipesId = async (id) =>{
    //>>>>>>En Db<<<<<<
    try {
         const RecipesIdDb= await Recipe.findByPk(id, {
            include: {    
                       model: Diet,
                       attributes: ['name'],
                       through: {attributes: [],}
                     }
         });
          return [RecipesIdDb];
    } catch(error) {
        console.log('🗑 ಠ_ಠ',error)
        }
        id = parseInt(id)
      
      //>>>>>>En Api<<<<<<
      try {
        
     const info = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?&apiKey=${API_KEY7}`)
    
          recipeapi = { 
            id: info.data.id,
            title: info.data.title,
            healthScore: info.data.healthScore, // que tan saludable es la receta 
            image: info.data.image,
            diets: info.data.diets, // retorna un array con los tipos de dietas
            score: info.data.spoonacularScore,  // puntuacion de la receta 
            dishTypes: info.data.dishTypes, // el tipo de la receta 
            summary: info.data.summary, // resumen de la receta 
            steps: info.data.analyzedInstructions[0]?.steps.map(e => {
              return {
                  number: e.number,
                  step: e.step
               }}),
            
          }
        return [recipeapi];
      } catch (error) {
        console.log(' 🗑 ',error)      
    }
  }

  //funcion para guardar en base de datos
  const SaveDietDb = async () => {
    try {
      const apiInfo = await getApiInfoFood(); //traemos todas las recetas de api
      const alldiets = apiInfo.map(info => info.diets) //mapeamos dietas de recetas
      const sinClonDiets = new Set(alldiets.flat())//creamos un nuevo array con dietas sin repetir 
      sinClonDiets.forEach(async d =>{await Diet.findOrCreate({where:{name: d}})}) //findOrCreate busca crea un nuevo y lo guarda
      const collectDiest = await Diet.findAll() //Find All retorna un nuevo array con todos los elementos dentro de 
      return collectDiest   
    }catch (error) {
    console.log(' 🗑 ',error)      
    }
   };

   //funcion para Obtener las dietas agregados previamente a db.......
 const GetDietsFromDB = async () => {
  try {
    let DietsDB = await  Diet.findAll(); //guard
    DietsDB =  DietsDB.map((d) => d.toJSON());   //mapea uno por uno y lo convierte en json 
    return DietsDB;
  } catch (error) {
    console.log(error);
  }
 }

 module.exports = {

    GetAllInfoRecipes,
    GeIdRecipesId,
    SaveDietDb,
    GetDietsFromDB

 }








 const router = require("express").Router();

const { 

    GetDiets,

 } = require("../controls/Diets");

 router.get("/diets", GetDiets); 

module.exports = router;
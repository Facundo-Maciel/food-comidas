const  router  = require('express').Router();

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const RecipeRouter = require("./Recipe");

const DietsRouter = require("./Diet");

// Configurar los routers
router.use("/", RecipeRouter);
router.use("/", DietsRouter);
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;

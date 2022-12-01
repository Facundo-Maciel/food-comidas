const {SaveDietDb,  GetDietsFromDB} = require("../controls/Utils");
//SaveDietDb(),//funcion para Guardar las dietas de la api a la db........
//GetDietsFromDB(),//funcion para Obtener las dietas agregados previamente a db.......

    const GetDiets = async(req , res) =>{

        try{
            
            await SaveDietDb();
            let Diets = await GetDietsFromDB((d) =>{

                return{
                    id: d.id,
                    name: d.name,
                }

            });
            res.send(Diets);
        }catch(error){
            res.send(error);
        }
    
    } 


module.exports = {

    GetDiets,

}



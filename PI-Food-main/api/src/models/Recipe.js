const {DataTypes} = require("sequelize");
//exportamos una funcion que define el modelo
//luego le inyectamos la conexion a sequelize.

module.exports = (sequelize) => {
    sequelize.define('recipe' , {
        id: {
            type: DataTypes.UUID,  
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,   //identificador id
            allowNull: false//nunca puede ser nulo siempre requerido
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        summary: {
            type: DataTypes.STRING,
            allowNull: false
        },
        healthScore: {
            type: DataTypes.FLOAT  //tipo de dato conpuesto por un numero que no es un entero
        },
        steps: {
            type: DataTypes.TEXT //string solo permite 40 caracteres por eso utilizamos text que es más largo
        },
        image: {
            type: DataTypes.STRING  //vinculo de una imagen jpg
        }
    })

}
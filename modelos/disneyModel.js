import mongoose  from "mongoose";

//Definir el esquema de persona:
    //1. Como esta constituida cada persona en BD
    //Objeto esquema: atributos

    const Schema = mongoose.Schema;

    const DisneySchema = new Schema ({ 
        nombre:{
            type: String,
            required: "Ingrese nombre"
        },
        apellido:{
            type: String,
            required: "Ingrese apellido"
        },
        pelicula: {
            type: String
        },
        personalidad: {
            type: String
        },
        color: {
            type: String
        },
        fecha_creación: {
            type: Date,
            default: Date.now
        }
    
     })
    
    export default DisneySchema
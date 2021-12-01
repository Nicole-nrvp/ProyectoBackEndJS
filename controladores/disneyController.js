import mongoose from "mongoose";
import DisneySchema from "../modelos/disneyModel.js";

//Crear objeto disney basada en el schema:
const Disney = mongoose.model('Disney', DisneySchema)

//Crear una acción para registrar nueva persona
export const addDisney = (request, response) => {
    //creando nueva disney
    let d = new Disney(request.body);
    //grabar la nueva disney
    console.log(request.body);
    d.save((error, d) => {
        if (error) {
            response.send(error);
        } else {
            response.json(d);
        }
    });
}

//Crear una acción para obtener disney 
export const getDisney = (request, response) => {
    Disney.find({}, (error, disneys) => {
        if (error) {
            response.send(error)
        } else {
            response.json(disneys)
        }
    })
}

//Crear una acción para obtener detalles de una persona
export const getDisneyById = (request, response) => {
    Disney.findById(request.params.disneyid, (error, disney) => {
        if (error) {
            response.send(error)
        } else {
            response.json(disney)
        }
    })
}

//Crear una acción para actualizar persona por Id
export const updateDisney = (request, response) => {
    //Metodo que permite seleccionar recurso y lo actualiza
    Disney.findOneAndUpdate(
        { _id: request.params.disneyid },
        request.body,
        {
            new: true
        },
        (error, disney) => {
            if (error) {
                response.send(error)
            } else {
                response.json(disney)
            }
        })
}

//Crear una acción para delete persona por Id
export const deleteDisney = (request, response) => {
    //Tambin con Persona.remove
    Disney.findOneAndRemove({ _id: request.params.disneyid },
        (error, disney) => {
            if (error) {
                response.send(error)
            } else {
                response.json({ mensaje: "Borrado exitoso" })
            }
        })
}

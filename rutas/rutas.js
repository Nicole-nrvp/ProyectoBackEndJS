//Crear objeto que representara nuestras rutas
    //Sera una funcion para getionar las rutas del proyecto
    //Necesitara el objeto express para crear ENDPOINT
        //los endpoints (gerja en desarrollo orientado a servicios) devuelven datos JSON
        //ENDPOINT Es una ruta REST: POST GET DELETE Y PUT, PATCH
        //expone colecciones/singleton/ resultados de opreaciones(formato JSON)

import { request, response } from "express"
import {
        addDisney,
        getDisney,
        getDisneyById,
        updateDisney,
        deleteDisney
       } from "../controladores/disneyController.js"

const rutas = (app) => {
    app.route('/disney')
       .get( getDisney )
       .post( addDisney )

    app.route('/disney/:disneyid')
        .get( getDisneyById )
        .put( updateDisney )
        .delete( deleteDisney )
}

export default rutas
import express from "express";
import rutas from "./rutas/rutas.js";
import mongoose  from "mongoose";
import bodyParser from "body-parser";


//Creacr objeto aplicación
const app = express()
const PUERTO = 5000

//Conexion a mongo:
//Decirle lo de promesas
mongoose.Promise = global.Promise
//1.Instalar dependencias npm i mongoose y npm i body-parser
mongoose.connect("mongodb://localhost/disneyCRM",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)

//Estalecer una configuración de Body-pARSER PARA FORMATOS json
app.use(bodyParser.urlencoded({ extended:true }))
app.use(bodyParser.json())

//CORS doiminio de peticiones
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

//Utilizar rutas definida en rutas.js
rutas(app)

//Crear servidor
app.listen(PUERTO, () => {
    console.log(`Servidor ejecutando en puerto: ${PUERTO}`);
})
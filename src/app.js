const express = require('express');
require('dotenv').config();
const initModels = require('./modules/initModels');
initModels();

const db = require('./utils/database');
db.sync({alter: true}).then(()=>  console.log("Base de datos Sincronizada"));


const app = express();
const PORT = process.env.PORT ?? 8000;

app.get('/', (req, res ) => {
res.send('Bienvenido al servidor de TODO APP');
});

app.listen(PORT, () => {
console.log(`servidor escuchando en el puerto ${PORT}`)
});


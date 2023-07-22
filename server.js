const express = require('express')
const { Server: HttpServer } = require('http')
const app = express()
const httpServer = new HttpServer(app)
const puerto = process.env.PORT || 8080;
const rutas = require('./routes/index')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const mongoose = require("mongoose");
  mongoose
  .connect('mongodb+srv://FawziL:Zddx1v2hhlB7ux8f@agenda.2xefrlm.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('¡Conexión exitosa a la base de datos!');
  })
  .catch((error) => {
    console.error('Error al conectar a la base de datos:', error.message);
  });
  
app.use('/', rutas)
app.use(express.static('public'))

const connectedServer = httpServer.listen(puerto, () => {
    console.log(`Servidor escuchando en el puerto: ${connectedServer.address().port}`)
})

connectedServer.on('error', error => console.log(`Error en servidor ${error}`))



const express = require('express');

const path = require('path');

const app = express();

const http = require('http');
// socketIO no trabaja directamente con express, pero si trabaja con un servidor de http que viene directamente en node.
const socketIO = require('socket.io');

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

// Le pasamos como parámetro el "app" de forma que ya tiene toda la configuración que tendríamos con express
// Express internamente está llamando a http
let server = http.createServer(app);

app.use(express.static(publicPath));

// "IO" va a mantener una conexión directa con el servidor. Esta es la parte del Backend.
// Exportamos "io" para que esta configuración sea visible desde socket.js
module.exports.io = socketIO(server);
// Ahora importamos el contenido de socket, donde teníamos toda la definición
require('./sockets/socket');


server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});
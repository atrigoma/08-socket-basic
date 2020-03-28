var socket = io();

// Los eventos "on" son para escuchar sucesos
socket.on('connect', function(){
    console.log("Connect to the server!!!");
});

socket.on('disconnect', function(){
    console.log("Disconnect to the server!!!");
});

socket.on('sendData', function(data){
    console.log(data);

})
// Los eventos "emit" son para enviar información.
// Los parámetros que tiene el "emit" son:
// 1.- Nombre del evento a enviar
// 2.- contenido a enviar
// 3.- Callback con la respuesta por parte del servidor.
socket.emit('sendInformation', {
    user: 'Alvaro Trigo',
    message: 'Information of the message'
}, function(callback){
    console.log('Se disparo el callback de sendInformation');
    console.log(callback);
});


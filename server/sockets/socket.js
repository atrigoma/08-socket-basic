const {io} = require('../server');


io.on('connection', (client)=> {
    console.log("user connected");

    // Con el "emit" enviamos informacion
    client.emit('sendData', {
        data1: 'content data1',
        data2: 'content data2'
    })

    client.on('disconnect', ()=> {
        console.log("The client is disconnected!!! The server is running...");
    })

    // En el evento de escucha, vamos a tener como parámetros:
    // * "message": con los datos que se envian en el evento por parte del cliente
    // * "callback": va a ser la funcion que se va a llamar cuando termine la acción.
    client.on('sendInformation', (data, callback) => {
        console.log(data);

        
        // con "client.broadcast.emit" se emite el msg a TODOS los clientes conectados.

        client.broadcast.emit('sendData', data);
        
        // con "client.emit" se emite el msg solo al cliente que ha iniciado la conversación
        //client.emit('sendData', data);

        // if (message.user){
        //     callback({
        //         resp: 'Everything is ok',
        //         user: message.user
        //     });
        // }
        // else{
        //     callback({
        //         resp: 'There isnt user'
        //     });
        // }
    })
})

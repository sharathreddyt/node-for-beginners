const WebSocketServer = require('ws');

const WSS = new WebSocketServer.Server({ port: 9090 });

WSS.on('connection', ws => {
  ws.on('message', message => {
    console.log(message);
    if (message === 'close') {
      WS.close();
    } else {
      //clients is an array of all the clients attached to this websocket server
      WSS.clients.forEach(client => {
        client.send(message);
      });
    }
  });
  console.log('we are connected');
});

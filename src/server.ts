import * as express from 'express';

import {environment} from './environments/environment';

//Events
import {TcpEventInterface} from './domain/tcp-event.interface';
import {RequestTcpEvent} from './tcp/events/request';

const events: Array<TcpEventInterface> = [
    new RequestTcpEvent()
];

const app = express();
app.set('serverPort', environment.serverPort);

const http = require('http').Server(app);
let io = require('socket.io')(http);

app.get('/', (req: any, res: any) => {
    res.send('hello world');
});

io.on('connection', (socket: any) => {
    events.forEach((event: TcpEventInterface) => {
        socket.on(event.eventName, (data: any) => {
            event.callback(socket, data);
        });
    });
});

const server = http.listen(environment.serverPort, function () {
    console.log('listening on *:' + environment.serverPort);
});
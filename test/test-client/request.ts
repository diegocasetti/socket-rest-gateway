import {Response} from "../../src/domain/response.type";
import {Request as RequestType} from "../../src/domain/request.type";
import {environment} from "../../src/environments/environment";

export class Request {
    static make(request: RequestType): Promise<Response> {
        return new Promise((resolve) => {
            const socket = require('socket.io-client')(`http://localhost:${environment.serverPort}`);
            socket.on('response', (response: Response) => {
                if (response.request.id === request.id) {
                    resolve(response);
                }
            });
            socket.emit('request', request);
        });
    }
}
import {TcpEventInterface} from '../../domain/tcp-event.interface';
import {environment} from '../../environments/environment';
import {Response} from '../../domain/response.type';
import {Request} from '../../domain/request.type';

const request = require('request');

const defaultHeaders = {
    "content-type": "application/json"
};

export class RequestTcpEvent implements TcpEventInterface{
    eventName = 'request';

    callback(socket: any, data: any) {
        // TODO: Validar formato de data (JSON)
        if (typeof data === 'string') {
            data = JSON.parse(data);
        }

        if (data.method === null || data.url === null) {
            const res: Response = {
                request: data,
                status: {
                    code: 400,
                    message: 'Invalid request'
                },
                headers: null,
                data: null
            };
            socket.emit('response', res);
        } else {
            this.makeRequest(socket, data);
        }
    }

    private makeRequest(socket: any, requestData: Request) {
        const headers: any = defaultHeaders;
        for (let key in requestData.headers) {
            headers[key] = requestData.headers[key];
        }
        const options = {
            url: environment.restApiURL + requestData.uri,
            method: requestData.method,
            headers: headers,
        };
        request(options, (error: any, response: any, body: any) => {
            if (typeof body === 'string') {
                body = JSON.parse(body);
            }
            const res: Response = {
                request: requestData,
                status: {
                    code: error ? 400 : response.statusCode,
                    message: error ? error.code : response.statusMessage
                },
                headers: response ? response.headers : null,
                data: body
            };
            socket.emit('response', res);
        }).on('error', (err: any) => {
            console.log("Error: " + err.message);
        });
    }
}
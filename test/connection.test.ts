import {environment} from "../src/environments/environment";

const assert = require('assert');

describe('Connection', function() {
    describe('#connected', function() {
        it('should be get connected with the server', () => {
            return new Promise((resolve) => {
                const socket = require('socket.io-client')(`http://localhost:${environment.serverPort}`);
                socket.on('connect', () => {
                    assert.ok(true, 'Have connection');
                    resolve();
                });
            });
        });
    });
});
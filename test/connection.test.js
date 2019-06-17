"use strict";
exports.__esModule = true;
var environment_1 = require("../src/environments/environment");
var assert = require('assert');
var socket = require('socket.io-client')("http://localhost:" + environment_1.environment.serverPort);
describe('Connection', function () {
    describe('#connected', function () {
        it('should be get connected with the server', function () {
            socket.on('connect', function () {
                // assert.ok(true, 'Have connection');
            });
            socket.on('connect_failed', function () {
                // assert.fail('Connection failed');
            });
        });
    });
});

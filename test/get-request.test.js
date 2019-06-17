"use strict";
exports.__esModule = true;
var environment_1 = require("../src/environments/environment");
var assert = require('assert');
var socket = require('socket.io-client')("http://localhost:" + environment_1.environment.serverPort);
describe('GetRequest', function () {
    describe('#publicGetRequest', function () {
        it('should be obtain a 200 response code and data depending on server configuration', function () {
        });
    });
});

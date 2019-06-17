import {test_environment} from "../src/environments/environment.test";
import {Request} from "./test-client/request";
import { expect } from 'chai';

describe('Parameters', function() {
    describe('#enough', function() {
        it('should be executed', async () => {
            const requestId: number = Math.round(Math.random() * 1000);
            const result = await Request.make({
                id: requestId,
                uri: test_environment.publicGetSuccessUri,
                method: 'get'
            });
            expect(result.status.code).to.be.equal(200);
        });
    });
    describe('#missingUriParameter', function() {
        it('not should be executed', async () => {
            const requestId: number = Math.round(Math.random() * 1000);
            const result = await Request.make({
                id: requestId,
                uri: null,
                method: 'get'
            });
            expect(result.status.code).to.be.equal(400);
        });
    });
    describe('#missingMethodParameter', function() {
        it('not should be executed', async () => {
            const requestId: number = Math.round(Math.random() * 1000);
            const result = await Request.make({
                id: requestId,
                uri: test_environment.publicGetSuccessUri,
                method: null
            });
            expect(result.status.code).to.be.equal(400);
        });
    });
    describe('#missingAllRequired', function() {
        it('not should be executed', async () => {
            const requestId: number = Math.round(Math.random() * 1000);
            const result = await Request.make({
                id: requestId,
                uri: null,
                method: null
            });
            expect(result.status.code).to.be.equal(400);
        });
    });
});
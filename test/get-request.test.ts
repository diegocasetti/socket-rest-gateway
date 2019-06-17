import {test_environment} from "../src/environments/environment.test";
import {Response} from "../src/domain/response.type";
import {Request} from "./test-client/request";
import { expect } from 'chai';

describe('GetRequest', function() {
    describe('#publicGetRequest', function() {
        it('should be obtain a 200 response code and data depending on server configuration', async () => {
            const requestId: number = Math.round(Math.random() * 1000);
            const result = await Request.make({
                id: requestId,
                uri: test_environment.publicGetSuccessUri,
                method: 'get'
            });
            expect(result.status.code).to.be.equal(200);
        });
    });
});
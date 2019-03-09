import 'reflect-metadata';
import 'mocha';
import Message from '../../src/models/Message';
import {HomeService} from '../../src/service/HomeService';
import * as chai from 'chai';

const expect = chai.expect;

describe('HomeService', () => {

    const homeService: HomeService = new HomeService();

    it('can say hello', async() => {
        const response: Message  = await homeService.sayHello();
        expect(response.getContent()).to.equal("Home sweet home");
    });
});

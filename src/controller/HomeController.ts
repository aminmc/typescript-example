import * as express from 'express';
import {inject} from 'inversify';
import {controller, httpGet, interfaces, request, response} from 'inversify-express-utils';
import TYPE from '../constant/TYPE';
import {HomeService} from '../service/HomeService';

@controller('/')
export class HomeController implements interfaces.Controller {

    public constructor(@inject(TYPE.HomeService) private readonly homeService: HomeService) {
        this.homeService = homeService;
    }

    @httpGet('/', TYPE.ProtectMiddleware)
    public async get(@request() req: express.Request, @response() res: express.Response): Promise<object> {

        return this.homeService.sayHello();
    }
}

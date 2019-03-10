import * as express from 'express';
import {inject} from 'inversify';
import {
    BaseHttpController,
    controller,
    httpGet,
    httpPost,
    request,
    requestBody,
    response
} from 'inversify-express-utils';
import TYPE from '../constant/TYPE';
import ValidationMiddleware from '../middleware/ValidationMiddleware';
import Message from '../models/Message';
import {HomeService} from '../service/HomeService';


@controller('/')
export class HomeController extends BaseHttpController {

    public constructor(@inject(TYPE.HomeService) private readonly homeService: HomeService) {
        super();
        this.homeService = homeService;
    }

    @httpGet('/', TYPE.ProtectMiddleware)
    public async get(@request() req: express.Request, @response() res: express.Response): Promise<Message> {
        return this.homeService.sayHello();
    }

    @httpPost('/', TYPE.ProtectMiddleware, ValidationMiddleware()(Message))
    public async create(@requestBody() message: Message, @response() res: express.Response): Promise<Message> {
        return this.homeService.create(message);
    }
}

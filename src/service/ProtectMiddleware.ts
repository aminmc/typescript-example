import * as express from 'express';
import {inject} from 'inversify';
import {BaseMiddleware} from 'inversify-express-utils';
import TYPE from '../constant/TYPE';
import provideSingleton from '../ioc/provideSingleton';
import {KeycloakService} from './KeycloakService';

@provideSingleton(TYPE.ProtectMiddleware)
export class ProtectMiddleware extends BaseMiddleware {

    private readonly keycloakProtect: any;
    constructor(@inject(TYPE.KeycloakService) private readonly keycloakService: KeycloakService) {
        super();
        this.keycloakProtect = this.keycloakService.protect();
    }

    public handler(req: express.Request, res: express.Response, next: express.NextFunction): void {
        this.keycloakProtect(req, res, next);
    }
}

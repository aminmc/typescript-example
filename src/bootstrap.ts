import * as bodyParser from 'body-parser';
import {InversifyExpressServer} from 'inversify-express-utils';
import 'reflect-metadata';

import TYPE from './constant/TYPE';
import {ApplicationContext} from './ioc/ApplicationContext';
import {KeycloakService} from './service/KeycloakService';

const applicationContext: ApplicationContext = new ApplicationContext();

const container = applicationContext.iocContainer();

const server = new InversifyExpressServer(container);

server.setConfig((app) => {
    const keycloakService: KeycloakService = container.get(TYPE.KeycloakService);
    app.use(keycloakService.middleware());
    app.use(bodyParser.urlencoded({
        extended: true,
    }));
    app.use(bodyParser.json());
});

const app = server.build();
app.listen(4000);

exports = module.exports = app;

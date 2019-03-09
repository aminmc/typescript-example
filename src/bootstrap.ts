import * as bodyParser from 'body-parser';
import {InversifyExpressServer} from 'inversify-express-utils';
import 'reflect-metadata';

import TYPE from './constant/TYPE';
import {ApplicationContext} from './ioc/ApplicationContext';
import {KeycloakService} from './service/KeycloakService';

const appContainer: ApplicationContext = new ApplicationContext();

const server = new InversifyExpressServer(appContainer.appContainer());

server.setConfig((app) => {
    const keycloakService: KeycloakService = appContainer.appContainer().get(TYPE.KeycloakService);
    app.use(keycloakService.middleware());
    app.use(bodyParser.urlencoded({
        extended: true,
    }));
    app.use(bodyParser.json());
});

const app = server.build();
app.listen(4000);

exports = module.exports = app;

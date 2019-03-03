import 'reflect-metadata';
import * as bodyParser from 'body-parser';
import {InversifyExpressServer} from 'inversify-express-utils';

import TYPE from './constant/TYPE';
import container from './ioc/inversify.config';
import {KeycloakService} from './service/KeycloakService';
import session = require('express-session');

const server = new InversifyExpressServer(container);

server.setConfig((app) => {
    const keycloakService: KeycloakService = container.get(TYPE.KeycloakService);

    app.use(session({
        secret: 'test1234',
        resave: false,
        saveUninitialized: true,
        store: keycloakService.store(),
        name: 'test1234'
    }));
    app.use(keycloakService.middleware());
    app.use(bodyParser.urlencoded({
        extended: true,
    }));
    app.use(bodyParser.json());
});

const app = server.build();
app.listen(4000);

exports = module.exports = app;
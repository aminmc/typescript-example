import {BaseMemoryStore} from 'express-session';
import Keycloak from 'keycloak-connect';
import TYPE from '../constant/TYPE';
import provideSingleton from '../ioc/provideSingleton';
import session = require('express-session');

@provideSingleton(TYPE.KeycloakService)
export class KeycloakService {

    private readonly keycloak: Keycloak;
    private readonly sessionStore: BaseMemoryStore;

    constructor() {
        const kcConfig = {
            'auth-server-url': 'http://localhost:8080/auth',
            'bearer-only': true,
            'confidential-port': 0,
            'realm': 'master',
            'resource': 'typescript-node-app',
            'ssl-required': 'external',
        };
        this.sessionStore = new session.MemoryStore();
        this.keycloak = new Keycloak({store: this.sessionStore}, kcConfig);
    }

    public middleware(): any {
        return this.keycloak.middleware();
    }

    public protect(): any {
        return this.keycloak.protect();
    }

    public store(): any {
        return this.sessionStore;
    }
}

import {provide} from 'inversify-binding-decorators';
import TYPE from '../constant/TYPE';

@provide(TYPE.Config)
export class Config {
    private readonly authUrl: string;
    private readonly authBearerOnly: string;
    private readonly authResource: string;
    private readonly authRealm: string;

    constructor() {
        this.authUrl = process.env.AUTH_URL || 'http://localhost:8080/auth';
        this.authResource = process.env.AUTH_RESOURCE || 'typescript-node-app';
        this.authBearerOnly = process.env.AUTH_BEARER_ONLY || 'true';
        this.authRealm = process.env.AUTH_REALM || 'master';
    }

    public authConfig(): object {
        return {
            'auth-server-url': this.authUrl,
            'bearer-only': this.authBearerOnly,
            'realm': this.authRealm,
            'resource': this.authResource,
        };
    }

}

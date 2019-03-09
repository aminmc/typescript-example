import {inject} from 'inversify';
import {provide} from 'inversify-binding-decorators';
import Keycloak from 'keycloak-connect';
import TYPE from '../constant/TYPE';
import {Config} from '../utilities/Config';

@provide(TYPE.KeycloakService)
export class KeycloakService {

    private readonly keycloak: Keycloak;

    constructor(@inject(TYPE.Config) private readonly config: Config) {
        this.keycloak = new Keycloak({}, config.authConfig());
    }

    public middleware(): any {
        return this.keycloak.middleware();
    }

    public protect(): any {
        return this.keycloak.protect();
    }

}

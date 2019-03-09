import {Container} from 'inversify';
import {buildProviderModule} from 'inversify-binding-decorators';
import TYPE from '../constant/TYPE';
import {ProtectMiddleware} from '../middleware/ProtectMiddleware';
import {HomeService} from '../service/HomeService';
import {KeycloakService} from '../service/KeycloakService';
import {Config} from '../utilities/Config';

export class ApplicationContext {
    private readonly container: Container;

    constructor() {
        this.container = new Container({
            defaultScope: 'Singleton'
        });
        this.container.bind<KeycloakService>(TYPE.KeycloakService).to(KeycloakService);
        this.container.bind<HomeService>(TYPE.HomeService).to(HomeService);
        this.container.bind<ProtectMiddleware>(TYPE.ProtectMiddleware).to(ProtectMiddleware);
        this.container.bind<Config>(TYPE.Config).to(Config);
         // this.container.load(buildProviderModule());
    }

    public iocContainer(): Container {
        return this.container;
    }
}

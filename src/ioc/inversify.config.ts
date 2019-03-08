
import {Container} from 'inversify';
import '../controller/HomeController';
import {buildProviderModule} from 'inversify-binding-decorators';
import TYPE from '../constant/TYPE';
import {HomeService} from '../service/HomeService';
import {KeycloakService} from '../service/KeycloakService';
import {ProtectMiddleware} from '../middleware/ProtectMiddleware';

const container = new Container({
    defaultScope: 'Singleton'
});

// container.load(buildProviderModule());
// console.log(container);
container.bind<KeycloakService>(TYPE.KeycloakService).to(KeycloakService);
container.bind<HomeService>(TYPE.HomeService).to(HomeService);
container.bind<ProtectMiddleware>(TYPE.ProtectMiddleware).to(ProtectMiddleware);

export default container;

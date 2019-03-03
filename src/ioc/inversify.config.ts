import {Container} from 'inversify';
import {buildProviderModule} from 'inversify-binding-decorators';
import TYPE from '../constant/TYPE';
import '../controller/HomeController';
import {HomeService} from '../service/HomeService';
import {KeycloakService} from '../service/KeycloakService';
import {ProtectMiddleware} from '../service/ProtectMiddleware';

const container = new Container();
// container.load(buildProviderModule());
container.bind<KeycloakService>(TYPE.KeycloakService).to(KeycloakService).inSingletonScope();
container.bind<HomeService>(TYPE.HomeService).to(HomeService).inSingletonScope();
container.bind<ProtectMiddleware>(TYPE.ProtectMiddleware).to(ProtectMiddleware).inSingletonScope();

export default container;

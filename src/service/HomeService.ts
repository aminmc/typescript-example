import {provide} from 'inversify-binding-decorators';
import TYPE from '../constant/TYPE';

@provide(TYPE.HomeService)
export class HomeService {

    public async sayHello(): Promise<object> {
        return Promise.resolve({message: 'Home sweet home'});
    }
}

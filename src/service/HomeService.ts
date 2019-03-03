import TYPE from '../constant/TYPE';
import provideSingleton from '../ioc/provideSingleton';

@provideSingleton(TYPE.HomeService)
export class HomeService {

    public async sayHello(): Promise<object> {
        return Promise.resolve({message: 'Home sweet home'});
    }
}

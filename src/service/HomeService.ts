import {provide} from 'inversify-binding-decorators';
import TYPE from '../constant/TYPE';
import Message from '../models/Message';

@provide(TYPE.HomeService)
export class HomeService {


    public async sayHello(): Promise<Message> {
        return Promise.resolve(new Message("Home sweet home"));
    }

    public async create(message: Message): Promise<Message> {
        return Promise.resolve(message);
    }
}

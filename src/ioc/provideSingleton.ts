import {fluentProvide} from 'inversify-binding-decorators';

const provideSingleton = (identifier: any): any => {
    return fluentProvide(identifier)
        .inSingletonScope()
        .done();
};

export default provideSingleton;

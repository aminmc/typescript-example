import {Container} from 'inversify';
import {buildProviderModule} from 'inversify-binding-decorators';

export class ApplicationContext {
    private readonly container: Container;

    constructor() {
        this.container = new Container({
            defaultScope: 'Singleton'
        });
        this.container.load(buildProviderModule());
    }

    public appContainer(): Container {
        return this.container;
    }
}

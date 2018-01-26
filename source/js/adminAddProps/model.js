import { EventEmitter } from './helpers';

class Model extends EventEmitter {
    constructor(items = []) {
        super();

        this.items = items;
    }
}

export default Model;
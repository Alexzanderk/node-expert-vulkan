import { EventEmitter } from './helpers';

class Model extends EventEmitter {
    constructor(items = []) {
        super();

        this.items = items;
    }

    findItem(id) {
        return this.items.find(item => item.id == id);
    }

    addItem(item) {
        this.items.push(item);
        this.emit('change', this.items);
        console.log(this.items);
        return item;
    }
    
    removeItem(id) {
        const index = this.items.findIndex(item => item.id == id);
        
        if (index > -1) {
            this.items.splice(index, 1);
            console.log(this.items);
            this.emit('change', this.items);
        }
        
    }

    changeCartItemsQuantity() {
        const sum = this.items.length;

        return sum;
    }
}

export default Model;
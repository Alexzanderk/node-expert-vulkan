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
        if ( this.items.length > 0 ) {
            const itemInCart = this.findItem(item.id);
            const index = this.items.indexOf(itemInCart);
            
            if ( itemInCart !== undefined ) {
                if (itemInCart.id === item.id) {
                    itemInCart.qty = +itemInCart.qty + +item.qty;
                    
                    this.emit('change', this.items);
                    return itemInCart;
                } 
            } else {
                this.items.push(item);
            }
        } else {
            this.items.push(item);
        }
        this.emit('change', this.items);

        return item;
    }

    removeItem(id) {
        const index = this.items.findIndex(item => item.id == id);

        if ( index > -1 ) {
            this.items.splice(index, 1);
            this.emit('change', this.items);
        }

    }

    totalItems() {
        let totalQty = 0;
        let totalPrice = 0;
        
        this.items.forEach(item => {
            totalQty += +item.qty;
            totalPrice += item.qty * item.price;
        });

        return {
            qty: totalQty,
            price: totalPrice
        };
    }

    itemsQuantity() {
        let sum = 0;

        this.items.forEach(item => {
            sum = sum + +item.qty;
        });

        return sum;
    }

    orderItems() {
        const url = 'http://localhost:3001/cart';
        let body = {
            items: JSON.stringify(this.items),
            name: document.getElementById('order-name').value,
            tel: document.getElementById('order-tel').value
        };
        const options = {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Accept': 'application/json, text/plain',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        };
        const req = new Request(url, options);

        fetch(req)
            .then(response => response.blob())
            .then(data => console.log(data))
            .catch(error => new Error('Ошибка с отправкой данных'));

        this.items = [];

        this.emit('change', this.items);
        return this.items;
    }
}

export default Model;
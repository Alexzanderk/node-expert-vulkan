import { EventEmitter, createElement } from './helpers';

class View extends EventEmitter {
    constructor() {
        super();

        this.cartListProduct = document.getElementById('cart-modal');
        this.modalOverlay = document.querySelector('.modal-overlay');
        this.modal = document.querySelector('.modal ');

        this.openCartButton = document.getElementById('headerCart');
        this.closeCartButton = document.querySelector('.close-modal');
        this.addCartButton = document.getElementById('cartAddBtn');

        this.addCartButton.addEventListener('click', this.handleAdd.bind(this));
        this.openCartButton.addEventListener('click', this.openCart.bind(this));
        this.closeCartButton.addEventListener('click', this.closeCart.bind(this));
    }
    
    createListItemProduct(product) {
        const closeIcon = createElement('i', { className: 'fa fa-times close-icon' })
        const itemDeleteButton = createElement('button', { className: 'btn btn-delete' }, closeIcon);
        const itemQuantity = createElement('span', { className: 'item-quantity' }, '1');
        const itemPrice = createElement('span', { className: 'item-price' }, product.price);
        const itemTitle = createElement('span', { className: 'item-name' }, product.title);
        const itemImg = createElement('img', { className: 'cart-img', 'src': product.img });
        const itemImgFrame = createElement('div', { className: 'cart-img-frame' }, itemImg);
        const item = createElement('li', { className: 'cart__item', 'data-id': product.id }, itemImgFrame, itemTitle, itemPrice, itemQuantity, itemDeleteButton);

        return this.addEventListener(item);
    }

    addEventListener(item) {
        const deleteButton = item.querySelector('.btn-delete');
        
        deleteButton.addEventListener('click', this.handleRemove.bind(this));

        return item;
    }

    findListItemProduct(id) {
        return this.cartListProduct.querySelector(`[data-id=${id}]`);
    }

    handleAdd() {
        const product = document.getElementById('product');
        const value = {};
        value.id = product.getAttribute('data-id');
        value.title = product.getAttribute('name');
        value.price = product.getAttribute('data-price');
        value.img = product.getAttribute('data-img');
        console.log(value);
        this.emit('add', value);
    }

    handleRemove({ target }) {
        const listItemProduct = target.parentNode.parentNode;

        this.emit('remove', listItemProduct.getAttribute('data-id'));
    }

    addProduct(product) {
        const listItemProduct = this.createListItemProduct(product);

        this.cartListProduct.appendChild(listItemProduct);
    }
    
    removeProduct(id) {
        const listItemProduct = this.findListItemProduct(id);
        
        this.cartListProduct.removeChild(listItemProduct);
    }

    openCart(event) {
        event.preventDefault();

        const menu = document.getElementById('menu-link');
        if ( menu.classList.contains('open') ) menu.classList.remove('open');

        this.modalOverlay.classList.add('active');
        this.modal.classList.add('active');
    }

    closeCart() {
        this.modalOverlay.classList.remove('active');
        this.modal.classList.remove('active');
    }

}

export default View;
export const cartModule = (function() {
    const cartListProduct = document.getElementById('cart-modal');
    const modalOverlay = document.querySelector('.modal-overlay');
    const modal = document.querySelector('.modal');
    const closeButton = document.querySelector('.close-modal');
    const deleteProductButton = document.querySelectorAll('.btn_delete');

    const headerCart = document.getElementById('headerCart');
    const openButton = document.querySelector('.cart__link');
    const headerCartQty = document.getElementById('headerCartNum');

    const addCartButton = document.getElementById('cartAddBtn');
    
    let count = 0;

    function openModalCart(event) {
        event.preventDefault();

        const menu = document.getElementById('menu-link');
        if ( menu.classList.contains('open') ) menu.classList.remove('open');

        modalOverlay.classList.add('active');
        modal.classList.add('active');
    }

    function closeModalCart() {
        modalOverlay.classList.remove('active');
        modal.classList.remove('active');
    }

    function createElement(tag, props, ...children) {
        const element = document.createElement(tag);

        Object.keys(props).forEach(key => {
            if ('dataset' === key) {
                Object.keys(props[key]).forEach(dataKey => element.dataset[dataKey] = props[key][dataKey]);
            } else if ('setup' === key) {
                Object.keys(props[key]).forEach(propsKey => element.setAttribute(propsKey, props[key][propsKey]));
            } else {
                element[key] = props[key]
            }
        });

        if (children.length > 0) {
            children.forEach(child => {
                if (typeof child === 'string') {
                    child = document.createTextNode(child);
                }

                element.appendChild(child);
            })
        }
        return element;
    }

    function createItemProduct(element) {
        const productContainer = element.parentNode.parentNode;
        const productImgSrc = productContainer.querySelector('.product__img').getAttribute('src');
        const productPrice = productContainer.querySelector('.price').innerText;
        const productQuantity = document.createTextNode('1');
        const productTitle = document.querySelector('.product__link.active').innerText;
        
        const closeIcon = createElement('i', { className: 'fa fa-times close-icon' })
        const itemDeleteButton = createElement('button', { className: 'btn btn-delete' }, closeIcon);
        const itemQuantity = createElement('span', { className: 'item-quantity' }, productQuantity);
        const itemPrice = createElement('span', { className: 'item-price' }, productPrice);
        const itemTitle = createElement('span', { className: 'item-name' }, productTitle);
        const itemImg = createElement('img', { className: 'cart-img', setup: { 'src': productImgSrc } });
        const itemImgFrame = createElement('div', { className: 'cart-img-frame' }, itemImg);
        const item = createElement('li', { className: 'cart__item' }, itemImgFrame, itemTitle, itemPrice, itemQuantity, itemDeleteButton);

        return addEventListener(item);
    }

    function addEventListener(item) {
        const deleteButton = item.querySelector('.btn-delete');
        
        deleteButton.addEventListener('click', deleteProduct);

        return item;
    }

    function addProduct() {
        const item = createItemProduct(this);

        cartListProduct.appendChild(item);
    }

    function deleteProduct() {
        const productList = this.parentNode.parentNode;
        const productItem = this.parentNode;
        
        productList.removeChild(productItem);
    }

    openButton.addEventListener('click', openModalCart);
    closeButton.addEventListener('click', closeModalCart);
    addCartButton.addEventListener('click', addProduct);
    deleteProductButton.forEach(button => button.addEventListener('click', deleteProduct));  //-delete 


})();
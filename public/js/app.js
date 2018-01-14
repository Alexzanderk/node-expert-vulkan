/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventEmitter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return save; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return load; });
class EventEmitter {
    constructor() {
        this.events = {};
    }

    on(type, listener) {
        this.events[type] = this.events[type] || [];
        this.events[type].push(listener);
    }

    emit(type, arg) {
        if (this.events[type]) {
            this.events[type].forEach(listener => listener(arg));
        }
    }
}

function createElement(tag, props, ...children) {
    const element = document.createElement(tag);

    Object.keys(props).forEach(key => {
        if (key.startsWith('data-')) {
            element.setAttribute(key, props[key]);
        } else {
            element[key] = props[key];
        }
    });

    children.forEach(child => {
        if (typeof child === 'string' || typeof child === 'number') {
            child = document.createTextNode(child);
        }

        element.appendChild(child);
    });
    
    return element;
}

function save(data) {
    const string = JSON.stringify(data);
    localStorage.setItem('cart', string);
}

function load() {
    const string = localStorage.getItem('cart');
    const data = JSON.parse(string);
    
    return data;
}



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__functions_regexForm__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__functions_regexPolyfillForm__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__functions_tab__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__functions_menuMobile__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__functions_productCatalogMenu__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cart__ = __webpack_require__(8);








if (document.getElementById('headerCart')) {
    const state = Object(__WEBPACK_IMPORTED_MODULE_5__cart__["d" /* load */])();

    const model = new __WEBPACK_IMPORTED_MODULE_5__cart__["b" /* Model */](state || undefined);
    model.on('change', state => Object(__WEBPACK_IMPORTED_MODULE_5__cart__["e" /* save */])(state));

    const view = new __WEBPACK_IMPORTED_MODULE_5__cart__["c" /* View */]();
    const controller = new __WEBPACK_IMPORTED_MODULE_5__cart__["a" /* Controller */](model, view);
}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const regex = (function (window) {

    'use strict';

    // class helper functions from bonzo https://github.com/ded/bonzo

    function classReg(className) {
        return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
    }

    // classList support for class management
    // altho to be fair, the api sucks because it won't accept multiple classes at once
    var hasClass, addClass, removeClass;

    if ('classList' in document.documentElement) {
        hasClass = function (elem, c) {
            return elem.classList.contains(c);
        };
        addClass = function (elem, c) {
            elem.classList.add(c);
        };
        removeClass = function (elem, c) {
            elem.classList.remove(c);
        };
    } else {
        hasClass = function (elem, c) {
            return classReg(c).test(elem.className);
        };
        addClass = function (elem, c) {
            if (!hasClass(elem, c)) {
                elem.className = elem.className + ' ' + c;
            }
        };
        removeClass = function (elem, c) {
            elem.className = elem.className.replace(classReg(c), ' ');
        };
    }

    function toggleClass(elem, c) {
        var fn = hasClass(elem, c) ? removeClass : addClass;
        fn(elem, c);
    }

    var classie = {
        // full names
        hasClass: hasClass,
        addClass: addClass,
        removeClass: removeClass,
        toggleClass: toggleClass,
        // short names
        has: hasClass,
        add: addClass,
        remove: removeClass,
        toggle: toggleClass
    };

    // transport
    if (typeof define === 'function' && __webpack_require__(3)) {
        // AMD
        define(classie);
    } else {
        // browser global
        window.classie = classie;
    }
})(window);
/* unused harmony export regex */


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const regexPolyfill = (function () {
    // trim polyfill : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
    if (!String.prototype.trim) {
        (function () {
            // Make sure we trim BOM and NBSP
            var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
            String.prototype.trim = function () {
                return this.replace(rtrim, '');
            };
        })();
    }

    [].slice.call(document.querySelectorAll('input.input__field')).forEach(function (inputEl) {
        // in case the input is already filled..
        if (inputEl.value.trim() !== '') {
            classie.add(inputEl.parentNode, 'input--filled');
        }

        // events:
        inputEl.addEventListener('focus', onInputFocus);
        inputEl.addEventListener('blur', onInputBlur);
    });

    function onInputFocus(ev) {
        classie.add(ev.target.parentNode, 'input--filled');
    }

    function onInputBlur(ev) {
        if (ev.target.value.trim() === '') {
            classie.remove(ev.target.parentNode, 'input--filled');
        }
    }
})();
/* unused harmony export regexPolyfill */


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const tab = (function () {
    
    function toggleTab(event) {
        event.preventDefault();

        const item = this.parentNode;
        const itemAttribute = item.getAttribute('data-tab');
        const itemsList = document.querySelectorAll('.catalog__item');
        const itemList = Array.prototype.filter.call(itemsList, element => element.getAttribute('data-list') === itemAttribute);
        
        Array.prototype.slice.call(item.parentNode.children).forEach(element => element.classList.remove('active'));
        item.classList.add('active');
        
        itemsList.forEach(element => element.classList.remove('active'));
        itemList[0].classList.toggle('active');
    }
    
    const tabButton = document.querySelectorAll('.product-list__link');
    tabButton.forEach(button => button.addEventListener('click', toggleTab));
})();
/* unused harmony export tab */


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const menuMobile = (function() {
    const iconMenu = document.getElementById('menu-link');

    function toggleMenu(event) {
        event.preventDefault();

        this.classList.toggle('open');
    }
    
    if (iconMenu !== null) iconMenu.addEventListener('click', toggleMenu);
})();
/* unused harmony export menuMobile */


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const menuCatalog = (function() {
    const iconMenu = document.getElementById('menu-catalog');

    function toggleMenu(event) {
        event.preventDefault();

        this.classList.toggle('open');
        const leftSideMenu = document.querySelector('.left-side-catalog');
        leftSideMenu.classList.toggle('open');
    }

    if (iconMenu != null) iconMenu.addEventListener('click', toggleMenu);
})();
/* unused harmony export menuCatalog */


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__controller__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers__ = __webpack_require__(0);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__model_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__view__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__controller__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_3__helpers__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__helpers__["c"]; });









/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers__ = __webpack_require__(0);


class View extends __WEBPACK_IMPORTED_MODULE_0__helpers__["a" /* EventEmitter */] {
    constructor() {
        super();

        this.cartListProduct = document.getElementById('cart-modal');
        this.modalOverlay = document.querySelector('.modal-overlay');
        this.modal = document.querySelector('.modal ');
        this.cartQuantity = document.getElementById('headerCartNum');
        this.totalCartPrice = document.querySelector('.order-sum-price');
        this.totalCartQuantity = document.querySelector('.order-sum-qty');
        
        this.openCartButton = document.getElementById('headerCart');
        this.closeCartButton = document.querySelector('.close-modal');
        this.addCartButton = document.getElementById('cartAddBtn');
        this.orderButton = document.getElementById('order-button');
        
        this.openCartButton.addEventListener('click', this.openCart.bind(this));
        this.closeCartButton.addEventListener('click', this.closeCart.bind(this));
        this.orderButton.addEventListener('click', this.handleOrder.bind(this));
        if (this.addCartButton) this.addCartButton.addEventListener('click', this.handleAdd.bind(this));
    }
    
    createListItemProduct(product) {
        const closeIcon = Object(__WEBPACK_IMPORTED_MODULE_0__helpers__["b" /* createElement */])('i', { className: 'fa fa-times close-icon' });
        const itemDeleteButton = Object(__WEBPACK_IMPORTED_MODULE_0__helpers__["b" /* createElement */])('button', { className: 'btn btn-delete' }, closeIcon);
        const itemQuantity = Object(__WEBPACK_IMPORTED_MODULE_0__helpers__["b" /* createElement */])('span', { className: 'item-quantity' }, product.qty);
        const itemPrice = Object(__WEBPACK_IMPORTED_MODULE_0__helpers__["b" /* createElement */])('span', { className: 'item-price' }, product.price);
        const itemTitle = Object(__WEBPACK_IMPORTED_MODULE_0__helpers__["b" /* createElement */])('span', { className: 'item-name' }, product.title);
        const itemImg = Object(__WEBPACK_IMPORTED_MODULE_0__helpers__["b" /* createElement */])('img', { className: 'cart-img', 'src': product.img });
        const itemImgFrame = Object(__WEBPACK_IMPORTED_MODULE_0__helpers__["b" /* createElement */])('div', { className: 'cart-img-frame' }, itemImg);
        const item = Object(__WEBPACK_IMPORTED_MODULE_0__helpers__["b" /* createElement */])('li', { className: 'cart__item', 'data-id': product.id }, itemImgFrame, itemTitle, itemPrice, itemQuantity, itemDeleteButton);
        
        return this.addEventListener(item);
    }

    addEventListener(item) {
        const deleteButton = item.querySelector('.btn-delete');
        
        deleteButton.addEventListener('click', this.handleRemove.bind(this));

        return item;
    }

    findListItemProduct(id) {
        return this.cartListProduct.querySelector(`[data-id="${id}"]`);
    }

    handleAdd() {
        const product = document.getElementById('production');
        const value = {};
        value.id = product.getAttribute('data-id');
        value.title = product.getAttribute('name');
        value.price = product.getAttribute('data-price');
        value.img = product.getAttribute('data-img');
        value.qty = '1';
        
        this.emit('add', value);
    }

    handleRemove({ target }) {
        const listItemProduct = target.parentNode.parentNode;

        this.emit('remove', listItemProduct.getAttribute('data-id'));
    }

    handleOrder() {
        this.emit('order');
    }

    deleteAllCartProducts() {
        while (this.cartListProduct.firstChild) {
            this.cartListProduct.removeChild(this.cartListProduct.firstChild);
        }
    }

    show(cart) {
        let total = {
            qty: 0, 
            price: 0
        };

        cart.forEach(item => {
            const listItem = this.createListItemProduct(item);
            this.cartListProduct.appendChild(listItem);
            
            total.qty += +item.qty;
            total.price += +item.qty * +item.price;

        });
        
        this.changeCartQuantity(total.qty);
        this.totalProductQuantity(total);
    }

    addProduct(product) {
        
        if ( product.qty > 1 ) {
            const productInList = this.findListItemProduct(product.id);
            productInList.querySelector('.item-quantity').innerText = product.qty;
        } else {
            const listItemProduct = this.createListItemProduct(product);
            this.cartListProduct.appendChild(listItemProduct);

        }
    }
    
    removeProduct(id) {
        const listItemProduct = this.findListItemProduct(id);
        
        this.cartListProduct.removeChild(listItemProduct);
    }

    changeCartQuantity(cartSum) {
        if (cartSum > 0) {
            this.cartQuantity.innerText = cartSum;
        } else {
            this.cartQuantity.innerText = '';
        }
    }

    totalProductQuantity(total) {
        this.totalCartQuantity.innerText = +total.qty;
        this.totalCartPrice.innerText = +total.price;
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

/* harmony default export */ __webpack_exports__["a"] = (View);

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers__ = __webpack_require__(0);


class Model extends __WEBPACK_IMPORTED_MODULE_0__helpers__["a" /* EventEmitter */] {
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
        let date = new Date();
        const dateFormat = {
            Y: date.getFullYear(),
            M: date.getUTCMonth() + +1,
            D: date.getDate(),
            H: date.getHours(),
            m: date.getMinutes()
        };
        // date.toLocaleDateString('ru', {year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric'});
        date.toJSON();
        console.log(date);
        let body = {
            date: date,
            // date: `${dateFormat.Y}/${dateFormat.M}/${dateFormat.D} ----- ${dateFormat.H}:${dateFormat.m}`,
            name: document.getElementById('order-name').value,
            tel: document.getElementById('order-tel').value,
            items: this.items
        };
        const options = {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Accept': 'application/json, text/plain',
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest'
            },
            body: JSON.stringify(body)
        };
        const req = new Request(url, options);
        fetch(req)
            .then(response => console.log(response))
            .then(data => console.log(data))
            .catch(error => new Error('Ошибка с отправкой данных'));

        this.items = [];

        this.emit('change', this.items);
        return this.items;
    }
}

/* harmony default export */ __webpack_exports__["a"] = (Model);

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Controller {
    constructor(model, view) {
        this.view = view;
        this.model = model;
        
        view.on('add', this.addProduct.bind(this));
        view.on('remove', this.removeProduct.bind(this));
        view.on('order', this.orderCart.bind(this));

        view.show(model.items);
    }

    addProduct(product) {
        const item = this.model.addItem(product);
        const itemSum = this.model.itemsQuantity();
        const total = this.model.totalItems();
        
        this.view.addProduct(item);
        this.view.changeCartQuantity(itemSum);
        this.view.totalProductQuantity(total);
    }
    
    removeProduct(id) {
        this.model.removeItem(id);
        
        const itemSum = this.model.itemsQuantity();
        const total = this.model.totalItems();
        
        this.view.removeProduct(id);
        this.view.changeCartQuantity(itemSum);
        this.view.totalProductQuantity(total);
    }

    orderCart() {
        this.model.orderItems();
        this.view.deleteAllCartProducts();
        this.view.changeCartQuantity(this.model.items);
        this.view.closeCart();
    }

}

/* harmony default export */ __webpack_exports__["a"] = (Controller);

/***/ })
/******/ ]);
//# sourceMappingURL=app.js.map
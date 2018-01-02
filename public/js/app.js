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
        if (typeof child === 'string') {
            child = document.createTextNode(child);
        }

        element.appendChild(child);
    });

    return element;
}



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__functions_google__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__functions_regexForm__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__functions_regexPolyfillForm__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__functions_tab__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__functions_menuMobile__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__functions_productCatalogMenu__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cart__ = __webpack_require__(9);






// import { cart } from './functions/cart';

// import { cartModule } from './functions/cart-module';

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const googleMap = (function () {
    'use strict';

    // When the window has finished loading create our google map below
    google.maps.event.addDomListener(window, 'load', init);

    function init() {
        var mapOptions = {
            zoom: 15,
            scrollwheel: false,
            navigationControl: false,
            mapTypeControl: false,
            scaleControl: false,
            draggable: true,
            sensor: false,

            // The latitude and longitude to center the map (always required)
            center: new google.maps.LatLng(50.490527, 30.412927),
            styles: [{
                'featureType': 'all',
                'elementType': 'labels.text.fill',
                'stylers': [{
                    'color': '#ffffff'
                }]
            },
            {
                'featureType': 'all',
                'elementType': 'labels.text.stroke',
                'stylers': [{
                    'visibility': 'simplified'
                },
                {
                    'color': '#3e606f'
                },
                {
                    'weight': 2
                },
                {
                    'gamma': 0.84
                }
                ]
            },
            {
                'featureType': 'all',
                'elementType': 'labels.icon',
                'stylers': [{
                    'visibility': 'off'
                }]
            },
            {
                'featureType': 'administrative',
                'elementType': 'geometry',
                'stylers': [{
                    'weight': 0.6
                },
                {
                    'color': '#1a3541'
                }
                ]
            },
            {
                'featureType': 'landscape',
                'elementType': 'geometry',
                'stylers': [{
                    'color': '#242930'
                }]
            },
            {
                'featureType': 'poi',
                'elementType': 'geometry',
                'stylers': [{
                    'color': '#181b23'
                }]
            },
            {
                'featureType': 'poi.park',
                'elementType': 'geometry',
                'stylers': [{
                    'color': '#2c712c'
                },
                {
                    'saturation': '-19'
                },
                {
                    'lightness': '-57'
                },
                {
                    'gamma': '1.01'
                }
                ]
            },
            {
                'featureType': 'road',
                'elementType': 'geometry',
                'stylers': [{
                    'color': '#f7cd78'
                },
                {
                    'lightness': '-66'
                },
                {
                    'saturation': '-32'
                },
                {
                    'gamma': '1.78'
                },
                {
                    'weight': '1.00'
                }
                ]
            },
            {
                'featureType': 'transit',
                'elementType': 'geometry',
                'stylers': [{
                    'color': '#06091a'
                }]
            },
            {
                'featureType': 'water',
                'elementType': 'geometry',
                'stylers': [{
                    'color': '#393e51'
                }]
            }
            ]
        };

        // Get the HTML DOM element that will contain your map 
        // We are using a div with id="map" seen below in the <body>
        var mapElement = document.getElementById('map');

        // Create the Google Map using our element and options defined above
        var map = new google.maps.Map(mapElement, mapOptions);

        // Let's also add a marker while we're at it
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(50.490527, 30.412927),
            map: map,
            title: 'Snazzy!'
        });
    }


})();
/* unused harmony export googleMap */


/***/ }),
/* 3 */
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
    if (typeof define === 'function' && __webpack_require__(4)) {
        // AMD
        define(classie);
    } else {
        // browser global
        window.classie = classie;
    }
})(window);
/* unused harmony export regex */


/***/ }),
/* 4 */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ }),
/* 5 */
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
/* 6 */
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
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const menuMobile = (function() {
    const iconMenu = document.getElementById('menu-link');

    function toggleMenu(event) {
        event.preventDefault();

        this.classList.toggle('open');
    }

    iconMenu.addEventListener('click', toggleMenu);
})();
/* unused harmony export menuMobile */


/***/ }),
/* 8 */
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
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export model */
/* unused harmony export view */
/* unused harmony export controller */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__controller__ = __webpack_require__(12);




const model = new __WEBPACK_IMPORTED_MODULE_1__model_js__["a" /* default */]();
const view = new __WEBPACK_IMPORTED_MODULE_0__view__["a" /* default */]();
const controller = new __WEBPACK_IMPORTED_MODULE_2__controller__["a" /* default */](model, view);



/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers__ = __webpack_require__(0);


class View extends __WEBPACK_IMPORTED_MODULE_0__helpers__["a" /* EventEmitter */] {
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
        const closeIcon = Object(__WEBPACK_IMPORTED_MODULE_0__helpers__["b" /* createElement */])('i', { className: 'fa fa-times close-icon' })
        const itemDeleteButton = Object(__WEBPACK_IMPORTED_MODULE_0__helpers__["b" /* createElement */])('button', { className: 'btn btn-delete' }, closeIcon);
        const itemQuantity = Object(__WEBPACK_IMPORTED_MODULE_0__helpers__["b" /* createElement */])('span', { className: 'item-quantity' }, '1');
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

/* harmony default export */ __webpack_exports__["a"] = (View);

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers__ = __webpack_require__(0);


class Model extends __WEBPACK_IMPORTED_MODULE_0__helpers__["a" /* EventEmitter */] {
    constructor(items = []) {
        super();

        this.items = items;
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
            this.emit('change', this.items);
        }
        console.log(this.items);
    }
}

/* harmony default export */ __webpack_exports__["a"] = (Model);

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Controller {
    constructor(model, view) {
        this.view = view;
        this.model = model;

        view.on('add', this.addProduct.bind(this));
        view.on('remove', this.removeProduct.bind(this));
    }

    addProduct(product) {
        const item = this.model.addItem(product);

        this.view.addProduct(item);
    }

    removeProduct(id) {
        this.model.removeItem(id);
        this.view.removeProduct(id);
    }
}

/* harmony default export */ __webpack_exports__["a"] = (Controller);

/***/ })
/******/ ]);
//# sourceMappingURL=app.js.map
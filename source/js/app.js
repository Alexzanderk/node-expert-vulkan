/**
 * Google maps
 */

(function () {
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



/**
 * Open Menu mobile
 */




(function () {

    var hamburger = $('.menu-icon'),
        navigation = hamburger.siblings('.nav');

    var closeMenu = function () {

        $('html').on('click', function (event) {
            navigation.removeClass('active');
        });

    };

    var openMenu = function () {
        $(hamburger).on('click', function (event) {
            event.preventDefault();
            event.stopPropagation();

            navigation.toggleClass('active');
        });
    };

    closeMenu();
    openMenu();
    // 
})();

/**
 * Slide one window down
 */

(function () {

    var btnDown = $('.arrowDown');
    var hWindow = $(window).height();

    btnDown.on('click', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: hWindow
        }, 800, 'swing');

        return false;
    });

})();



/**
 * Open cart
 * Close cart
 * Esc cart
 */

(function () {

    var cartLink = $('.cart__link'),
        closeLink = $('.close__link'),
        cartModal = $('.modal__cart');

    cartLink.on('click', function (event) {
        event.preventDefault();

        $('body').addClass('lock');
        cartModal.fadeIn('fast');

        if (true) { }

        return false;
    });

    closeLink.on('click', function (event) {
        event.preventDefault();

        cartModal.hide();
        $('body').removeClass('lock');
    });

    $(document).keydown(function (e) {
        if (e.keyCode === 27) {
            cartModal.hide();
            $('body').removeClass('lock');
        }
    });

})();


/**
 * Quantity product in a cart
 */

(function () {

    var increment = $('.input-number-increment'),
        decrement = $('.input-number-decrement');


    increment.on('click', function () {

        var thisInput = $(this),
            input = thisInput.siblings('.input-number'),
            valInput = input.val();

        var newVal = parseInt(valInput) + 1;

        return input.val(newVal);

    });

    decrement.on('click', function () {
        var thisInput = $(this),
            input = thisInput.siblings('.input-number'),
            valInput = input.val();

        if (valInput <= 1) {
            var newVal = valInput;
        } else {
            var newVal = parseInt(valInput) - 1;
        }

        input.val(newVal);
    });


})();



// (function () {

// 	/*cart*/
// 	var cart = $('.cart'),
// 			cartLink = cart.find('.cart__link'),
// 			cartQuantity = cartLink.find('.quant'),
// 			cartQuantityText = cartQuantity.find('.icon__span');

// 	/*cart brn*/
// 	var btnBuy = $('.btn-buy'),


// })();


(function (window) {

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
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(classie);
    } else {
        // browser global
        window.classie = classie;
    }

})(window);


(function () {
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

(function () {
    $(".product__list__link").on("click", function (e) {
        e.preventDefault();

        let item = $(this).closest(".product__list__item"),
            contentItem = $(".catalog__item"),
            itemPosition = item.index();

        contentItem
            .eq(itemPosition)
            .add(item)
            .addClass("active")
            .siblings()
            .removeClass("active");
    });
})();

(function () {
    
})();
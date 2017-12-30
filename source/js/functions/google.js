export const googleMap = (function () {
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
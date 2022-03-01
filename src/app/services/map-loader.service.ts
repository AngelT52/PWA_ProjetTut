import { Injectable } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
import { environment } from 'src/environments/environment';

@Injectable({
providedIn: 'root'
})
export class MapLoaderService {

constructor() { }


loadMap(lat : number, long : number) :void {
let loader = new Loader({
    apiKey: environment.googlemap.apiKey
});

    loader.load().then(() => {
    const map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
    center: { lat: lat, lng: long },
    zoom: 18,
    maxZoom: 19,
    minZoom: 16,
    disableDefaultUI: true,
    styles: [
{
    "featureType": "all",
    "elementType": "labels",
    "stylers": [
        {
            "visibility": "simplified"
        }
    ]
},
{
    "featureType": "administrative",
    "elementType": "all",
    "stylers": [
        {
            "visibility": "simplified"
        },
        {
            "color": "#5b6571"
        },
        {
            "lightness": "35"
        }
    ]
},
{
    "featureType": "administrative.neighborhood",
    "elementType": "all",
    "stylers": [
        {
            "visibility": "off"
        }
    ]
},
{
    "featureType": "landscape",
    "elementType": "all",
    "stylers": [
        {
            "visibility": "on"
        },
        {
            "color": "#f3f4f4"
        }
    ]
},
{
    "featureType": "landscape.man_made",
    "elementType": "geometry",
    "stylers": [
        {
            "weight": 0.9
        },
        {
            "visibility": "off"
        }
    ]
},
{
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [
        {
            "visibility": "on"
        },
        {
            "color": "#83cead"
        }
    ]
},
{
    "featureType": "road",
    "elementType": "all",
    "stylers": [
        {
            "visibility": "on"
        },
        {
            "color": "#ffffff"
        }
    ]
},
{
    "featureType": "road",
    "elementType": "labels",
    "stylers": [
        {
            "visibility": "off"
        }
    ]
},
{
    "featureType": "road.highway",
    "elementType": "all",
    "stylers": [
        {
            "visibility": "on"
        },
        {
            "color": "#fee379"
        }
    ]
},
{
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
        {
            "visibility": "on"
        }
    ]
},
{
    "featureType": "road.highway",
    "elementType": "labels",
    "stylers": [
        {
            "visibility": "off"
        }
    ]
},
{
    "featureType": "road.highway",
    "elementType": "labels.icon",
    "stylers": [
        {
            "visibility": "off"
        }
    ]
},
{
    "featureType": "road.highway.controlled_access",
    "elementType": "labels.icon",
    "stylers": [
        {
            "visibility": "off"
        }
    ]
},
{
    "featureType": "road.arterial",
    "elementType": "all",
    "stylers": [
        {
            "visibility": "simplified"
        },
        {
            "color": "#ffffff"
        }
    ]
},
{
    "featureType": "road.arterial",
    "elementType": "labels",
    "stylers": [
        {
            "visibility": "off"
        }
    ]
},
{
    "featureType": "road.arterial",
    "elementType": "labels.icon",
    "stylers": [
        {
            "visibility": "off"
        }
    ]
},
{
    "featureType": "water",
    "elementType": "all",
    "stylers": [
        {
            "visibility": "on"
        },
        {
            "color": "#7fc8ed"
        }
    ]
    
}

]
    });
    
    new google.maps.Marker({
    position: { lat: lat, lng: long },
    map,
    title: "Je suis ici.",
    icon:  "https://media.discordapp.net/attachments/282552629249441792/943595198380912700/outline_directions_bike_black_36dp.png" //add real link and customize icon
    });
    
});

}

loadMapParkour(parkourPos : Array<any>) :void {
    let loader = new Loader({
        apiKey: environment.googlemap.apiKey
    });
        console.log(parkourPos[0])
        console.log(parkourPos)
        loader.load().then(() => {
        const map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
        center: parkourPos[0],
        zoom: 18,
        maxZoom: 19,
        minZoom: 16,
        disableDefaultUI: true,
        styles: [
    {
        "featureType": "all",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "color": "#5b6571"
            },
            {
                "lightness": "35"
            }
        ]
    },
    {
        "featureType": "administrative.neighborhood",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#f3f4f4"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "geometry",
        "stylers": [
            {
                "weight": 0.9
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#83cead"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#fee379"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway.controlled_access",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#7fc8ed"
            }
        ]
        
    }
    
    ]
        });
        
        new google.maps.Marker({
        position: parkourPos[0],
        map,
        title: "Début du parcours",
        });
        console.log(parkourPos[0])
        console.log(parkourPos)

        new google.maps.Marker({
            position: parkourPos[parkourPos.length-1],
            map,
            title: "Fin du parcours",
            });
        
        const flightPath = new google.maps.Polyline({
        path: parkourPos,
        geodesic: true,
        strokeColor: "#FF0000",
        strokeOpacity: 1.0,
        strokeWeight: 2,
        });
    
        flightPath.setMap(map);
        
    });
    
    }
}


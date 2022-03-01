import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader'
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { MapLoaderService } from '../services/map-loader.service';
import { ParkourService } from '../services/parkour.service';

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
    map!: google.maps.Map;
    marker: google.maps.Marker[] = [];
    constructor(private toastr : ToastrService, private mapLoader: MapLoaderService, private parkourService : ParkourService) { 
    }
    parkour!: any ;
    ngOnInit(): void {
        let loader = new Loader({
            apiKey: environment.googlemap.apiKey
        });
        navigator.geolocation.getCurrentPosition((position) =>  {
            loader.load().then(() => {
                this.map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
                    center: { lat: position.coords.latitude, lng: position.coords.longitude },
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
                    })
                    
                
                    const uluru = { lat: position.coords.latitude, lng: position.coords.longitude };
                    const marker = new google.maps.Marker({
                    position: uluru,
                    map: this.map,
                    icon: "https://thierry-angel.fr/img/biker.png"
                    });
                    
            });
        });

        if(!navigator.geolocation) {
            this.toastr.error('L\'accès a la localisation n\'est pas activé')
        }   
        navigator.geolocation.getCurrentPosition((position) =>  {
            this.map = this.mapLoader.loadMap(position.coords.latitude, position.coords.longitude);
        });

    }
    
    recordParkour() : void{
        this.toastr.info('En cours d\'implémentation');
        this.parkourService.uploadTestParkour(this.parkour);

        navigator.geolocation.getCurrentPosition((position) =>  {
                this.mapLoader.loadMap(position.coords.latitude, position.coords.longitude);
            });
    }
    
    focusMap() : void{ 
        navigator.geolocation.getCurrentPosition((position) =>  {
        var center = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        this.map.panTo(center);
        })

        }
}
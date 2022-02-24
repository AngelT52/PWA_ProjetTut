import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader'
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { MapLoaderService } from '../services/map-loader.service';

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

    constructor(private toastr : ToastrService, private mapLoader: MapLoaderService ) { 

    }

    ngOnInit(): void {
        if(!navigator.geolocation) {
            this.toastr.error('L\'accès a la localisation n\'est pas activé')
        }   
        
        navigator.geolocation.getCurrentPosition((position) =>  {
            this.mapLoader.loadMap(position.coords.latitude, position.coords.longitude);
        });
    }
    
    recordParkour() : void{
        this.toastr.info('En cours d\'implémentation');
    }

    
}
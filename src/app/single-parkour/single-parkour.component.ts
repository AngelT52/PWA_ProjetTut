import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Parkour } from '../models/parkour-model';
import { MapLoaderService } from '../services/map-loader.service';
import { ParkourService } from '../services/parkour.service';

@Component({
  selector: 'app-single-parkour',
  templateUrl: './single-parkour.component.html',
  styleUrls: ['./single-parkour.component.css']
})
export class SingleParkourComponent implements OnInit {
  parkour!: Parkour;

  constructor(private parkourService: ParkourService,
              private route: ActivatedRoute, private mapLoader : MapLoaderService) {}
  
  ngOnInit() {
    const parkourId = +this.route.snapshot.params['id']
    this.parkour = this.parkourService.getParkourById(parkourId);
    this.mapLoader.loadMap(this.parkour.lat,this.parkour.long);
  }

}


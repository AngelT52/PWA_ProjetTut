import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
  deleteId!: any ;
  constructor(private parkourService: ParkourService,
              private route: ActivatedRoute, private mapLoader : MapLoaderService,
              private toastr : ToastrService, private router: Router) {}
  
  ngOnInit() {
    const parkourId = +this.route.snapshot.params['id']
    this.parkour = this.parkourService.getParkourById(parkourId);
    console.log(this.parkour)
    this.mapLoader.loadMapParkour(this.parkour.parkourPos);
    this.deleteId = this.parkourService.getParkourById(parkourId).uid;
  }

  deleteParkour() {
    this.parkourService.deleteParkour(this.deleteId);
    this.toastr.success('Parcours supprimé');
    this.router.navigate(['parkours']);
  }

}


import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ParkourService } from '../services/parkour.service';
import { Parkour } from '../models/parkour-model';
import { environment } from 'src/environments/environment';
import { Loader } from '@googlemaps/js-api-loader'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-parkour',
  templateUrl: './parkour.component.html',
  styleUrls: ['./parkour.component.css']
})
export class ParkourComponent implements OnInit {
  @Input() parkour!: Parkour;

  constructor(private toastr : ToastrService, private parkourService: ParkourService, private router : Router ) { 

  }
  onViewParkour(): void{
    this.router.navigateByUrl(`parkours/${this.parkour.id}`);
  }
  ngOnInit(): void {
  
  }
}

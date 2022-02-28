import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ParkourService } from '../services/parkour.service';
import { Parkour } from '../models/parkour-model';
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

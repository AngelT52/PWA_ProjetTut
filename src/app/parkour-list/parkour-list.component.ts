import { Component, OnInit } from '@angular/core';
import { Parkour } from '../models/parkour-model';
import { ParkourService } from '../services/parkour.service';

@Component({
  selector: 'app-parkour-list',
  templateUrl: './parkour-list.component.html',
  styleUrls: ['./parkour-list.component.css']
})
export class ParkourListComponent implements OnInit {
  
  parkours!: Parkour[];
  constructor(private trainingService: ParkourService) { }

  ngOnInit(): void {
    this.parkours = this.trainingService.getAllParkours();
  }

}

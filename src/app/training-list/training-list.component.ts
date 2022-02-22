import { Component, OnInit } from '@angular/core';
import { Training } from '../models/training-model';
import { TrainingService } from '../services/training.service';

@Component({
  selector: 'app-training-list',
  templateUrl: './training-list.component.html',
  styleUrls: ['./training-list.component.css']
})

export class TrainingListComponent implements OnInit {
    
  trainings!: Training[];
  constructor(private trainingService: TrainingService) { }

  ngOnInit(): void {
    this.trainings = this.trainingService.getAllTrainings();
  }

}

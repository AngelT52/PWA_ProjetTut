import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Training } from '../models/training-model';
import { TrainingService } from '../services/training.service';

@Component({
  selector: 'app-training-list',
  templateUrl: './training-list.component.html',
  styleUrls: ['./training-list.component.css']
})

export class TrainingListComponent implements OnInit {
    
  trainings!: Training[];
  constructor(private trainingService: TrainingService, private toastr : ToastrService) { }

  ngOnInit(): void {
    this.trainings = [] as Training[];
    this.trainings = this.trainingService.getAllTrainings();
  }
  onViewCustomTraining() : void {
    this.toastr.info('En cours de réalisation')
  }

}

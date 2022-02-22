import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Training } from '../models/training-model';
import { TrainingService } from '../services/training.service';


@Component({
  selector: 'app-single-training',
  templateUrl: './single-training.component.html',
  styleUrls: ['./single-training.component.css']
})
export class SingleTrainingComponent implements OnInit {
  training!: Training;

  constructor(private trainingService: TrainingService,
              private route: ActivatedRoute) {}
  
  ngOnInit() {
    const trainingId = +this.route.snapshot.params['id']
    this.training = this.trainingService.getTrainingById(trainingId);
    console.log(this.trainingService.getTrainingById(trainingId))
  }

}


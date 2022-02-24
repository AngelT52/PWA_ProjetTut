import { Component, Input, OnInit } from '@angular/core';
import { Training } from '../models/training-model';
import { Router } from '@angular/router';
import { TrainingService } from '../services/training.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {

  @Input() training!: Training;

  constructor(private trainingService: TrainingService, private router : Router, private toastr : ToastrService) {}
  
  ngOnInit() {
  }

  onViewTraining(): void{
    this.router.navigateByUrl(`trainings/${this.training.id}`);
  }
}





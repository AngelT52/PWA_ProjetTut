import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Training } from '../models/training-model';
import { TrainingService } from '../services/training.service';


@Component({
  selector: 'app-single-training',
  templateUrl: './single-training.component.html',
  styleUrls: ['./single-training.component.css']
})
export class SingleTrainingComponent implements OnInit {
  training!: Training;
  deleteId!: any ;
  constructor(private trainingService: TrainingService, private route: ActivatedRoute, private toastr : ToastrService, private router: Router) {}
  
  ngOnInit() {
    const trainingId = +this.route.snapshot.params['id']
    this.training = this.trainingService.getTrainingById(trainingId);
    this.deleteId = this.trainingService.getTrainingById(trainingId).uid;
  }

  deleteTraining() {
      this.trainingService.deleteTraining(this.deleteId);
      this.toastr.success('Entraînement supprimé');
      this.router.navigate(['trainings']);
    }
  }



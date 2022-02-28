import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';
import { TrainingService } from '../services/training.service';

@Component({
  selector: 'app-training-form',
  templateUrl: './training-form.component.html',
  styleUrls: ['./training-form.component.css']
})
export class TrainingFormComponent implements OnInit {

  
  trainingForm!: FormGroup;

  constructor(private authService: AuthService, private router: Router, private afAuth: AngularFireAuth, private toastr : ToastrService, private trainingService : TrainingService) {
    }

  ngOnInit(): void {
    this.trainingForm = new FormGroup({
      'title' : new FormControl('', Validators.required),
      'content' : new FormControl('', [Validators.required]),
      'category' : new FormControl('', [Validators.required])
    });

  }

  addTraining() : any {
    if(this.trainingForm. invalid)
      this.toastr.error('Veuillez correctement remplir le formulaire svp')
    else{
      this.trainingService.uploadTraining(this.trainingForm.value)
      this.toastr.success('Ajouté')
      this.router.navigate(['trainings']);

    }
  }

  
  }



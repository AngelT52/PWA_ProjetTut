import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  signupForm!: FormGroup;
  firebaseErrorMessage!: string;

  constructor(private authService: AuthService, private router: Router, private afAuth: AngularFireAuth, private toastr : ToastrService) {
    this.firebaseErrorMessage = "" ;
    }

  ngOnInit(): void {
    if(this.authService.userLoggedIn) {
      this.router.navigate(['/map']);
    }

    this.signupForm = new FormGroup({
      'name' : new FormControl('', Validators.required),
      'email' : new FormControl('', [Validators.required, Validators.email]),
      'password' : new FormControl('', Validators.required)
    });

  }

  signup(){
    if(this.signupForm. invalid)
      this.toastr.error('Veuillez correctement remplir le formulaire svp')
    this.authService.signupUser(this.signupForm.value).then((result) => {
      if(result == null)
      this.router.navigate(['/map']);
    else if(result.invalid == false)
      this.firebaseErrorMessage = result.message;
    }).catch(() => { });
  }

}

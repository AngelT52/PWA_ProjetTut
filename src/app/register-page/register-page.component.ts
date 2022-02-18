import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  signupForm!: FormGroup;
  firebaseErrorMessage!: string;

  constructor(private authService: AuthService, private router: Router, private afAuth: AngularFireAuth) {
    this.firebaseErrorMessage = "" ;
    }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'name' : new FormControl('', Validators.required),
      'email' : new FormControl('', [Validators.required, Validators.email]),
      'password' : new FormControl('', Validators.required)
    });

  }

  signup(){
    if(this.signupForm.invalid)
      return;
    this.authService.signupUser(this.signupForm.value).then((result) => {
      if(result == null)
      this.router.navigate(['/map']);
    else if(result.invalid == false)
      this.firebaseErrorMessage = result.message;
    }).catch(() => { });
  }

}

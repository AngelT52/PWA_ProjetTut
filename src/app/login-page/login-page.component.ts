import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loginForm : FormGroup;
  firebaseErrorMessage: string ;
  constructor(private authService : AuthService, private router : Router, private afAuth : AngularFireAuth) {
    this.loginForm = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', Validators.required)
    });

    this.firebaseErrorMessage = '';
   }

  ngOnInit(): void {
  }

  loginUser() {
    if(this.loginForm.invalid) 
      return;
    
    this.authService.loginUser(this.loginForm.value.email, this.loginForm.value.password).then((result) => {
      if (result == null) {
        console.log('Utilisateur connecté');
        this.router.navigate(['map']);
      }
      else if (result.isValid == false) {
        console.log('Erreur de connexion', result);
        this.firebaseErrorMessage = result.message ;

      }
    })
  }

  // Pour aller plus viter, a retirer plus tard
  loginGuest() { 
    
    this.authService.loginUser("Thierry.Angel@protonmail.com", "123456789").then((result) => {
      if (result == null) {
        console.log('Utilisateur connecté');
        this.router.navigate(['map']);
      }
      else if (result.isValid == false) {
        console.log('Erreur avec la session invité', result);
        this.firebaseErrorMessage = result.message ;

      }
    })
  }

}

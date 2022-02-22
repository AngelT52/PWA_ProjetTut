import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-forgot-password',
    templateUrl: './forgot-password.component.html',
    styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

    mailSent: boolean;
    isProgressVisible: boolean;
    forgotPasswordForm: FormGroup;
    firebaseErrorMessage: string;

    constructor(private authService: AuthService, private router: Router, private afAuth: AngularFireAuth, private toastr: ToastrService) {
        this.mailSent = false;
        this.isProgressVisible = false;

        this.forgotPasswordForm = new FormGroup({
            'email': new FormControl('', [Validators.required, Validators.email])
        });

        this.firebaseErrorMessage = '';
    }

    ngOnInit(): void {
        this.afAuth.authState.subscribe(user => {               // Si l'utilisateur est connecté, rempli le formulaire avec son mail
            if (user) {
                this.forgotPasswordForm.patchValue({
                    email: user.email
                });
            }
        });
    }

    retrievePassword() {
        if (this.forgotPasswordForm.invalid)
            return;
        this.authService.resetPassword(this.forgotPasswordForm.value.email).then((result) => {
            if (result == null) {
                console.log('Le mail de reset de mdp a été envoyé');
                this.mailSent = true;
                this.toastr.success('Le mail de changement de mot de passe a été envoyé.')
                this.router.navigate(['/home']);

            }
            else if (result.isValid == false) {
                console.log('login error', result);
                this.firebaseErrorMessage = result.message;
            }
        });
    }

    sendEmailCheck() {
      this.authService.resetPassword(this.forgotPasswordForm.value.email).then((result) => {
          if (result == null) {
              console.log('Le mail de reset de mdp a été envoyé');
              this.mailSent = true;
              this.toastr.success('Le mail de changement de mot de passe a été envoyé.')
              this.router.navigate(['/home']);

          }
          else if (result.isValid == false) {
              console.log('login error', result);
              this.firebaseErrorMessage = result.message;
          }
      });
  }

}

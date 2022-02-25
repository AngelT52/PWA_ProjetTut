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

    forgotPasswordForm: FormGroup;
    firebaseErrorMessage: string;

    constructor(private authService: AuthService, private router: Router, private afAuth: AngularFireAuth, private toastr: ToastrService) {

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
            this.toastr.error('Renseignez votre email svp')
        this.authService.resetPassword(this.forgotPasswordForm.value.email);
        this.router.navigate(['/home']);
    }

}

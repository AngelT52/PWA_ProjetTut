import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-reset-mail',
  templateUrl: './reset-mail.component.html',
  styleUrls: ['./reset-mail.component.css']
})
export class ResetMailComponent implements OnInit {

  changeMailForm: FormGroup;
  constructor(private authService: AuthService, private router: Router, private afAuth: AngularFireAuth, private toastr: ToastrService ) {
    this.changeMailForm = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.email])
    });
  }

  ngOnInit(): void {
  }

  async changeMail() {
    if(this.changeMailForm.valid)
      this.authService.updateEmail(this.changeMailForm.value.email);
    else
      this.toastr.error('Veuillez saisir une adresse mail valide.')
  }
}

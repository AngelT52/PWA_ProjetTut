import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth, private toastr : ToastrService) { }

  ngOnInit(): void {
  }

  logout():void {
    this.afAuth.signOut();
    this.toastr.error('Déconnexion réussie')
  }
}

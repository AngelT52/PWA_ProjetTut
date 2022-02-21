import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-parameters-page',
  templateUrl: './parameters-page.component.html',
  styleUrls: ['./parameters-page.component.css']
})
export class ParametersPageComponent implements OnInit {

  user!: Observable<any>;
  email!: string;

  constructor(private authService: AuthService ,public afAuth: AngularFireAuth, private firestore: AngularFirestore) {
      this.user != null;
      this.email = '';
  }

  ngOnInit(): void {
      this.afAuth.authState.subscribe(user => {
          if (user) {
              let emailLower = user.email?.toLowerCase();
              this.user = this.firestore.collection('users').doc(emailLower).valueChanges();
          }
      });
  }

}

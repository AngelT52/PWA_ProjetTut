import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userLoggedIn : boolean;

  constructor(private router:Router, private afAuth: AngularFireAuth, private afFirestore : AngularFirestore) { 
    this.userLoggedIn = false;
    this.afAuth.onAuthStateChanged((user)=> {
      if (user) {
        this.userLoggedIn = true ;
      } else {
        this.userLoggedIn = false ;
      }
    });
  }

  loginUser(email : string, password : string): Promise<any> {
    return this.afAuth.signInWithEmailAndPassword(email,password)
        .then((result) => {
          console.log('auth service : loginUser : success');
        })
        .catch(error => {
          console.log('auth service : user login : fail');
          console.log ('error code', error.code);
          console.log('error', error);
          if(error.code)
            return {isValid : false, message : error.message};
          else {return;}
        });
  }

  signupUser(user : any): Promise<any> {
    return this.afAuth.createUserWithEmailAndPassword(user.email,user.password)
        .then((result) => {
          let emailLower = user.email.toLowerCase();

          this.afFirestore.doc('/users/'+ emailLower)
            .set({
              accountType:'utilisateur',
              displayName: user.name,
              displayName_lower: user.name.toLowerCase(),
              email:  user.email,
              email_lower: emailLower
            });

          result.user?.sendEmailVerification();
        })
        .catch(error => {
          console.log('auth service : user signup : fail');
          console.log ('error code', error.code);
          console.log('error', error);
          if(error.code)
            return {isValid : false, message : error.message};
          else {return;}
        });
  }

  resetPassword(email :string): Promise<any> {
    return this.afAuth.sendPasswordResetEmail(email)
      .then(() => {
        console.log('Auth service : reset de mdp')
      })

  }
}

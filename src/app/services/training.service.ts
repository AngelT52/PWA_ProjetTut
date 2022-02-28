import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Parkour } from '../models/parkour-model';
import { Training } from '../models/training-model';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {
  userLoggedIn : boolean;
  userMailLower: string | null = "";
  userUid: string | null = "";
  constructor(private afFirestore : AngularFirestore, private afAuth: AngularFireAuth,) {
    this.userLoggedIn = false;
    this.afAuth.onAuthStateChanged((user)=> {
      if (user) {
        this.userLoggedIn = true ;
        this.userMailLower = user.email ;
        this.userUid = user.uid ;
      } else {
        this.userLoggedIn = false ;
      }
    });
  }
  
  trainings: Training[] = [];
    
  toDateTime(secs : any) {
    var t = new Date(1970, 0, 1); // Epoch
    t.setSeconds(secs);
    return t;
}
  getAllTrainings(): Training[]  {
    var i = 0
    this.trainings = []
    let trainings = this.afFirestore.firestore.doc('/users/'+ this.userUid).collection('trainings');
    trainings.get().then((querySnapshot) => { 
      querySnapshot.forEach((doc) => {
        i += 1
        this.trainings.push({
          id: i,
          title: [doc.data()][0]['title'],
          desc: [doc.data()][0]['content'],
          category: [doc.data()][0]['category'],
          createdDate : this.toDateTime([doc.data()][0]['recordedDate']),
          uid: doc.id
        })
        
    })
      
  })
  return this.trainings
}

  getTrainingById(TrainingId: number): Training {
    const training = this.trainings.find(training => training.id === TrainingId)
    if (!training) {
        throw new Error(' not found !')
      } else {
          return training
      }
  }

  uploadTraining(training : any) :void {
    this.afFirestore.doc('/users/'+ this.userUid).collection('trainings').add({title : training.title, content : training.content, category : training.category, recordedDate : new Date()})
  }

  deleteTraining(training : any ) :void {
    this.afFirestore.doc('/users/'+ this.userUid).collection('trainings').doc(training).delete();
}
}
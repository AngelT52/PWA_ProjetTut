import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Parkour } from '../models/parkour-model';

@Injectable({
  providedIn: 'root'
})
export class ParkourService {
  
  userUid: string | null = "";
  userLoggedIn : boolean;
  constructor(private afFirestore : AngularFirestore, private afAuth: AngularFireAuth,) {
    this.userLoggedIn = false;
    this.afAuth.onAuthStateChanged((user)=> {
      if (user) {
        this.userLoggedIn = true;
        this.userUid = user.uid;
      } 
      else {
        this.userLoggedIn = false;
      }
    });
  }
  parkours: Parkour[] = [];

  toDateTime(secs : any) {
    var t = new Date(1970, 0, 1); // Epoch
    t.setSeconds(secs);
    return t;
  }

  getAllParkours(): Parkour[] {
    var i = 0;
    this.parkours = [];
    let trainings = this.afFirestore.firestore.doc('/users/'+ this.userUid).collection('parkours');
    trainings.get().then((querySnapshot) => { 
      querySnapshot.forEach((doc) => {
        i += 1
        this.parkours.push({
          id: i,
          recordedDate : this.toDateTime([doc.data()][0]['recordedDate']['seconds']),
          lat: [doc.data()][0]['lat'],
          long: [doc.data()][0]['long'],
          parkourPos: [doc.data()][0]['parkourPos'],
          uid: doc.id
        });
        
    });
      
    });
    return this.parkours
  }

  getParkourById(ParkourId: number): Parkour {
    const parkour = this.parkours.find(parkour => parkour.id === ParkourId);
    if (!parkour) {
      throw new Error(' not found !');
    }
    else {
      return parkour;
    }
  }

  uploadParkour(lat : number, long: number, parkourPos : []) : void {
    this.afFirestore.doc('/users/'+ this.userUid).collection('parkours').add({recordedDate : new Date(), lat : lat , long: long, parkourPos : parkourPos});
  }

  deleteParkour(parkourId : any) : void {
    this.afFirestore.doc('/users/'+ this.userUid).collection('parkours').doc(parkourId).delete();
  }
}
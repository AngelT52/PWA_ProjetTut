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
        this.userLoggedIn = true ;
        this.userUid = user.uid ;
      } else {
        this.userLoggedIn = false ;
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
    var i = 0
    this.parkours = []
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
        })
        
    })
      
  })
  console.log(this.parkours)
  return this.parkours
  }

  getParkourById(ParkourId: number): Parkour {
    const parkour = this.parkours.find(parkour => parkour.id === ParkourId)
    if (!parkour) {
        throw new Error(' not found !')
      } else {
          return parkour
      }
  }

  uploadTestParkour() :void {
    this.afFirestore.doc('/users/'+ this.userUid).collection('parkours').add({recordedDate : new Date(), lat : 48.29054979753901 , long: 6.942273378372175, parkourPos : [
      { lat: 48.29054979753901, lng: 6.942273378372175 },
      { lat: 48.2907497858056, lng: 6.942914426326734 },
      { lat: 48.29177090721654, lng: 6.939843297004682 },
      { lat: 48.292731110786285, lng: 6.934492290019971 },
      { lat: 48.29191032690624, lng: 6.9319146871566595 },
      { lat: 48.290807562526524, lng: 6.933950483798963 },
      { lat: 48.29058314756089, lng: 6.934712231159192 },
      { lat: 48.28962346130315, lng: 6.937142312526685 }
    ]})
  }

  uploadParkour() :void {
    this.afFirestore.doc('/users/'+ this.userUid).collection('parkours').add({recordedDate : new Date(), lat : 48.29054979753901 , long: 6.942273378372175, parkourPos : [
      { lat: 48.29054979753901, lng: 6.942273378372175 },
      { lat: 48.2907497858056, lng: 6.942914426326734 },
      { lat: 48.29177090721654, lng: 6.939843297004682 },
      { lat: 48.292731110786285, lng: 6.934492290019971 },
      { lat: 48.29191032690624, lng: 6.9319146871566595 },
      { lat: 48.290807562526524, lng: 6.933950483798963 },
      { lat: 48.29058314756089, lng: 6.934712231159192 },
      { lat: 48.28962346130315, lng: 6.937142312526685 }
    ]})
  }

  deleteParkour(parkourId : any ) :void {
    this.afFirestore.doc('/users/'+ this.userUid).collection('parkours').doc(parkourId).delete();
}

}
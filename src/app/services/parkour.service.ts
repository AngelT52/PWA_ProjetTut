import { Injectable } from '@angular/core';
import { Parkour } from '../models/parkour-model';

@Injectable({
  providedIn: 'root'
})
export class ParkourService {
  parkours: Parkour[] = [
    {
        id: 1,
        recordedDate: new Date(),
        lat: 48.2974063,
        long: 6.9036048
    },
    {
        id: 2,
        recordedDate: new Date(),
        lat: 48.1040029,
        long: 5.1336906
    },
    {
        id: 3,
        recordedDate: new Date(),
        lat: 48.292861,
        long: 6.933938
    }
  ];

  getAllParkours(): Parkour[] {
      return this.parkours;
  }

  getParkourById(ParkourId: number): Parkour {
    const parkour = this.parkours.find(parkour => parkour.id === ParkourId)
    if (!parkour) {
        throw new Error(' not found !')
      } else {
          return parkour
      }
  }

}
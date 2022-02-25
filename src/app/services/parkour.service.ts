import { Injectable } from '@angular/core';
import { Parkour } from '../models/parkour-model';

@Injectable({
  providedIn: 'root'
})
export class ParkourService {
  parkours: Parkour[] = [
    {
        id: 1,
        recordedDate: new Date(2022,0o2,21, 12,34),
        lat: 48.2898678,
        long: 6.9347942,
        parkourPos: [
          { lat: 48.2898678, lng: 6.9347942 },
          { lat: 48.2901422, lng: 6.9429441 },
          { lat: 48.2889406, lng: 6.9438735 },
          { lat: 48.2894288, lng: 6.9447533 }
        ]
    },
    {
        id: 2,
        recordedDate: new Date(2022,0o2,21, 11,0o2),
        lat: 48.11136526965175,
        long: 5.139833004333885,
        parkourPos: [
          { lat: 48.1116751732534, lng: 5.13985379145375 },
          { lat: 48.11222141052772, lng: 5.138439596750648 },
          { lat: 48.11196445223812, lng: 5.138182775237472 },
          { lat: 48.112598437058914, lng: 5.138494582035453 },
          { lat: 48.11320197035729, lng: 5.138778225638778 },
          { lat: 48.11309454983954, lng: 5.139527232506187},
        ]
    },
    {
        id: 3,
        recordedDate: new Date(2022,0o2,17, 17,40),
        lat: 48.29054979753901,
        long: 6.942273378372175,
        parkourPos: [
          { lat: 48.29054979753901, lng: 6.942273378372175 },
          { lat: 48.2907497858056, lng: 6.942914426326734 },
          { lat: 48.29177090721654, lng: 6.939843297004682 },
          { lat: 48.292731110786285, lng: 6.934492290019971 },
          { lat: 48.29191032690624, lng: 6.9319146871566595 },
          { lat: 48.290807562526524, lng: 6.933950483798963 },
          { lat: 48.29058314756089, lng: 6.934712231159192 },
          { lat: 48.28962346130315, lng: 6.937142312526685 }

        ]
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
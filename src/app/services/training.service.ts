import { Injectable } from '@angular/core';
import { Training } from '../models/training-model';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {
  trainings: Training[] = [
    {
        id: 1,
        title:'Entraînement Course',
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sollicitudin, leo nec interdum consequat, magna est venenatis sapien, eget pharetra elit lacus ac elit. Sed tellus libero, gravida vel velit sit amet, congue interdum ex. Phasellus eros felis, cursus vel mauris eget, ullamcorper egestas tortor. Cras id leo non purus rutrum vehicula nec molestie metus. Nam eu pharetra libero, a finibus nisi. Suspendisse vehicula dignissim lorem, et fringilla ante placerat et. Vestibulum at rhoncus felis. Morbi id facilisis dolor. Aenean augue diam, blandit id tincidunt pharetra, vulputate eu dolor. Nunc euismod orci eros, a commodo sapien tempus id. Phasellus purus neque, aliquet in imperdiet finibus, auctor non metus. Phasellus porttitor commodo quam id aliquam.',
        createdDate: new Date()
    },
    {
        id: 2,
        title:'Entraînement Vélo',
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sollicitudin, leo nec interdum consequat, magna est venenatis sapien, eget pharetra elit lacus ac elit. Sed tellus libero, gravida vel velit sit amet, congue interdum ex. Phasellus eros felis, cursus vel mauris eget, ullamcorper egestas tortor. Cras id leo non purus rutrum vehicula nec molestie metus. Nam eu pharetra libero, a finibus nisi. Suspendisse vehicula dignissim lorem, et fringilla ante placerat et. Vestibulum at rhoncus felis. Morbi id facilisis dolor. Aenean augue diam, blandit id tincidunt pharetra, vulputate eu dolor. Nunc euismod orci eros, a commodo sapien tempus id. Phasellus purus neque, aliquet in imperdiet finibus, auctor non metus. Phasellus porttitor commodo quam id aliquam.',
        createdDate: new Date(),
    },
    {
        id: 3,
        title:'Entraînement Fitness',
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sollicitudin, leo nec interdum consequat, magna est venenatis sapien, eget pharetra elit lacus ac elit. Sed tellus libero, gravida vel velit sit amet, congue interdum ex. Phasellus eros felis, cursus vel mauris eget, ullamcorper egestas tortor. Cras id leo non purus rutrum vehicula nec molestie metus. Nam eu pharetra libero, a finibus nisi. Suspendisse vehicula dignissim lorem, et fringilla ante placerat et. Vestibulum at rhoncus felis. Morbi id facilisis dolor. Aenean augue diam, blandit id tincidunt pharetra, vulputate eu dolor. Nunc euismod orci eros, a commodo sapien tempus id. Phasellus purus neque, aliquet in imperdiet finibus, auctor non metus. Phasellus porttitor commodo quam id aliquam.',
        createdDate: new Date(),
    }];

  getAllTrainings(): Training[] {
      return this.trainings;
  }

  getTrainingById(TrainingId: number): Training {
    const training = this.trainings.find(training => training.id === TrainingId)
    if (!training) {
        throw new Error(' not found !')
      } else {
          return training
      }
  }

}

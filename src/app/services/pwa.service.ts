import {Injectable} from '@angular/core';
import {SwUpdate} from '@angular/service-worker';

@Injectable({
  providedIn: 'root'
})
export class PwaService {
  promptEvent!: any;

  constructor(private swUpdate: SwUpdate) {
    swUpdate.available.subscribe(event => {
      if (confirm('Sport App a été mis a jour, relancer l\'application ? ')) {
        window.location.reload();
      }
    });
    window.addEventListener('beforeinstallprompt', event => {
      this.promptEvent = event;
    });
  }
}
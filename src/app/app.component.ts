import { Component } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sport-app';
}

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5gAXv-bZRCivIb5rrhBnKIeQvubaq3lA",
  authDomain: "sport-app-75eeb.firebaseapp.com",
  projectId: "sport-app-75eeb",
  storageBucket: "sport-app-75eeb.appspot.com",
  messagingSenderId: "526498915133",
  appId: "1:526498915133:web:382ffc8d237ded5b611b54",
  measurementId: "G-CEQPSMJDSN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
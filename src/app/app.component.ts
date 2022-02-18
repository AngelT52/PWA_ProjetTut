import { Component, OnInit } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(public afAuth : AngularFireAuth) {}
  
  ngOnInit(): void {
    const btn = document.querySelector("button.mobile-menu-button");
    const menu = document.querySelector(".mobile-menu");
    
    btn?.addEventListener("click", () => {
      menu?.classList.toggle("hidden");
      
    })
    window.addEventListener('resize', () => {
      if(window.innerWidth > 768){
          menu?.classList.add('hidden');
      }
  })
  }
  title = 'sport-app';
}

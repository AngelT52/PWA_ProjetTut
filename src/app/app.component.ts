import { Component, OnInit } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ToastrService } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(public afAuth : AngularFireAuth, private toastr: ToastrService) {}

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

  notLoggedToaster(){

    this.toastr.warning('Veuillez vous connecter svp.');
  }

  
}

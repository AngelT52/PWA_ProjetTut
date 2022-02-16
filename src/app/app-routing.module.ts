import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { AuthGuard } from './services/auth.guard';
import { TrainingComponent } from './training/training.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

const routes: Routes = [
  { path: '', component: WelcomePageComponent },  
  { path:'map', component : MapComponent, canActivate: [AuthGuard]},
  { path:'training', component : TrainingComponent, canActivate: [AuthGuard]}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

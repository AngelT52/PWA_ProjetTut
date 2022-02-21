import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { MapComponent } from './map/map.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ParametersPageComponent } from './parameters-page/parameters-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { AuthGuard } from './services/auth.guard';
import { TrainingComponent } from './training/training.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

const routes: Routes = [
  { path:'', redirectTo:'home', pathMatch:'full'},  
  { path:'home', component: WelcomePageComponent },  
  { path:'map', component : MapComponent, canActivate: [AuthGuard]},
  { path:'register', component : RegisterPageComponent},
  { path:'training', component : TrainingComponent, canActivate: [AuthGuard]},
  { path:'params', component : ParametersPageComponent},
  { path:'verify-email', component : VerifyEmailComponent},
  { path:'reset-password', component : ForgotPasswordComponent},
  { path: '**', component: PagenotfoundComponent },

  
];

// , { enableTracing: true }
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

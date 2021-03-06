import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { MapComponent } from './map/map.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { TrainingComponent } from './training/training.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { ParametersPageComponent } from './parameters-page/parameters-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { TrainingListComponent } from './training-list/training-list.component';
import { SingleTrainingComponent } from './single-training/single-training.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { ParkourListComponent } from './parkour-list/parkour-list.component';
import { ParkourComponent } from './parkour/parkour.component';
import { SingleParkourComponent } from './single-parkour/single-parkour.component';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { ResetMailComponent } from './reset-mail/reset-mail.component';
import { TrainingFormComponent } from './training-form/training-form.component';



// the second parameter 'fr' is optional
registerLocaleData(localeFr, 'fr');

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    LoginPageComponent,
    MapComponent,
    TrainingComponent,
    RegisterPageComponent,
    ParametersPageComponent,
    PagenotfoundComponent,
    VerifyEmailComponent,
    ForgotPasswordComponent,
    TrainingListComponent,
    SingleTrainingComponent,
    ParkourListComponent,
    ParkourComponent,
    SingleParkourComponent,
    ResetMailComponent,
    TrainingFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 1000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
      progressBar: true,
    }),
    ServiceWorkerModule.register('./ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

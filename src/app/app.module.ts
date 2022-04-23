import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { FooterComponent } from './sharepages/footer/footer.component';
import { NavbarComponent } from './sharepages/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogSubmitComponent } from './pages/dialog-submit/dialog-submit.component';
import { DoctorLoginComponent } from './pages/doctor-login/doctor-login.component';
import { PatientRegistartionComponent } from './pages/patient-registartion/patient-registartion.component';
import { PatientLoginComponent } from './pages/patient-login/patient-login.component';
import { DoctorPageComponent } from './pages/doctor-page/doctor-page.component';
import { BookAppointmentsComponent } from './pages/book-appointments/book-appointments.component';




@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    routingComponents,
    DialogSubmitComponent,
    DoctorLoginComponent,
    PatientRegistartionComponent,
    PatientLoginComponent,
    DoctorPageComponent,
    BookAppointmentsComponent,
    
  ],
  entryComponents:[DialogSubmitComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

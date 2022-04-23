import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { BookAppointmentsComponent } from './pages/book-appointments/book-appointments.component';
import { CancelAppointmentComponent } from './pages/cancel-appointment/cancel-appointment.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DoctorLoginComponent } from './pages/doctor-login/doctor-login.component';
import { DoctorPageComponent } from './pages/doctor-page/doctor-page.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { HomeComponent } from './pages/home/home.component';
import { PatientLoginComponent } from './pages/patient-login/patient-login.component';
import { PatientRegistartionComponent } from './pages/patient-registartion/patient-registartion.component';


const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  // {path:'book_appointment',component:BookAppointmentComponent},


  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'gallery',component:GalleryComponent},
  {path:'cancel',component:CancelAppointmentComponent},
  {path:'logindoctor',component:DoctorLoginComponent},
  {path:'patientregistration',component:PatientRegistartionComponent},
  {path:'patientlogin',component:PatientLoginComponent},
  {path:'doctor',component:DoctorPageComponent},
  {path:'bookappointment',component:BookAppointmentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[BookAppointmentsComponent,DoctorPageComponent,PatientLoginComponent,PatientRegistartionComponent,DoctorLoginComponent,AboutComponent,ContactComponent,GalleryComponent,HomeComponent,CancelAppointmentComponent]

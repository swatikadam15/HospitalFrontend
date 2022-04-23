import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RouteReuseStrategy } from '@angular/router';
import { BookappointmentService } from 'src/app/bookappointment.service';


interface department {
  value: string;
  viewValue: string;
}
interface Time {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-book-appointments',
  templateUrl: './book-appointments.component.html',
  styleUrls: ['./book-appointments.component.css']
})
export class BookAppointmentsComponent implements OnInit {

  departments: department[] = [
    { value: 'Labaratory analysis', viewValue: 'Labaratory analysis' },
    { value: 'Cardiology', viewValue: 'Cardiology' },
    { value: 'Neurology', viewValue: 'Neurology' },
    { value: 'Dental service', viewValue: 'Dental service' },
  ];

  time: Time[] = [
    { value: '10:00', viewValue: '10:00' },
    { value: '1:00', viewValue: '1:00' },
    { value: '2:00', viewValue: '2:00' },
    { value: '4:00', viewValue: '4:00' },
    { value: '6:00', viewValue: '6:00' },

  ];
userid:any
id:any
appointmentDetails:any
  constructor( private fb: FormBuilder,private appointmentbook:BookappointmentService) { }

  get appiontmentdate() {
    return this.bookappoinmentForm.get('AppointmentDate');
  }

  get service() {
    return this.bookappoinmentForm.get('service');
  }
  ngOnInit(): void {
    // this.userid=localStorage.getItem('userid')
    console.log(this.userid)
    this.appointmentbook.getappointmentdetails(this.userid).subscribe((result:any)=>{
    this.appointmentDetails=result
    console.log(result)
    })
    
    
  }
  bookappoinmentForm = this.fb.group({
  
    AppointmentDate: ['', Validators.required],
    AppointmentMesaage: [''],
    service: ['', Validators.required],
    AppoinmentTime: ['', Validators.required],
  });


  bookappointment(){
    var appointmet={
      AppintmentId :this.userid,
      Service  :this.bookappoinmentForm.value.service,
      AppointmentDate :this.bookappoinmentForm.value.AppointmentDate,
      AppointmentMesaage :this.bookappoinmentForm.value.AppointmentMesaage,
      AppoinmentTime :this.bookappoinmentForm.value.AppoinmentTime
      
    }
    console.log(appointmet)
    this.appointmentbook.bookappointment(appointmet).subscribe((result:any)=>{
      alert('Book Appointment successfully');
    console.log(result)
    
    })

  }

}

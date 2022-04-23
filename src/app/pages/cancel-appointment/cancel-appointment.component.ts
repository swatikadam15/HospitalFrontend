import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BookappointmentService } from '../../bookappointment.service';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { DialogSubmitComponent } from '../dialog-submit/dialog-submit.component';
import * as moment from 'moment';

interface department {
  value: string;
  viewValue: string;
}
interface Time {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-cancel-appointment',
  templateUrl: './cancel-appointment.component.html',
  styleUrls: ['./cancel-appointment.component.css'],
})

export class CancelAppointmentComponent implements OnInit {

  todayDate=new Date
  userid:any
  reportData:any=[]


  departments: department[] = [
    { value: 'Labaratory analysis', viewValue: 'Labaratory analysis' },
    { value: 'Cardiology', viewValue: 'Cardiology' },
    { value: 'Neurology', viewValue: 'Neurology' },
    { value: 'Dental service', viewValue: 'Dental service' },
  ];

  time: Time[] = [
    { value: '10:00', viewValue: '10:00AM' },
    { value: '12:00', viewValue: '12:00AM' },
    { value: '2:00', viewValue: '2:00PM' },
    { value: '4:00', viewValue: '4:00PM' },
  ];
  id:any;
  constructor(
    private fb: FormBuilder,
    private appointment: BookappointmentService,
    public dialog: MatDialog,
    public route:ActivatedRoute
  ) {}
  bookappoinmentForm = this.fb.group({
   
    appointment_date: ['', Validators.required],
    appointment_mesaage: [''],
    service: ['', Validators.required],
    appoinment_time: ['', Validators.required],
  });


  ngOnInit(): void {
    this.userid=localStorage.getItem('userid')
    console.log(this.userid)


  }


data:any


  cancelappointment(userid:any){
   this.appointment.cancelBooking(this.userid).subscribe((result)=>{
    alert("Cancel Booking Successfully");
   this.bookappoinmentForm.reset({})
    
   }, error=>{
    alert("You had aleady canceled the booking!!!! ")})
  }

  report(){    
    this.appointment.getGeneratedReport(this.userid).subscribe((data)=>{
      console.log(data)
      this.reportData=data
    })

  }
  getappointments(){
    this.appointment.getappointment().subscribe((data)=>{
     console.log(data)
  
    })
  }




  
}

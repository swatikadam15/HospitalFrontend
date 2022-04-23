import { Component, OnInit } from '@angular/core';
import { BookappointmentService } from 'src/app/bookappointment.service';


@Component({
  selector: 'app-dialog-submit',
  templateUrl: './dialog-submit.component.html',
  styleUrls: ['./dialog-submit.component.css']
})
export class DialogSubmitComponent implements OnInit {

  constructor(private appointment: BookappointmentService,) { }

  ngOnInit(): void {
    this.bookingid()
  }

  id:any=[]
  bookingid(){
    this.appointment.getapointmentid().subscribe((data)=>{
      this.id=data
     
    })
  }
}

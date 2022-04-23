import { Component, OnInit } from '@angular/core';
import { BookappointmentService } from 'src/app/bookappointment.service';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

   
    constructor(
    private fb: FormBuilder,
     
      private appointment: BookappointmentService,
    ) { }
    contactForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['',Validators.required],
      usermeassgae: ['', Validators.required],
    });
  ngOnInit(): void {
  }

  conatct(){
    this.appointment.savecontactdata(this.contactForm.value).subscribe((result)=>{
     console.log(result)
     alert('Thank you for contacting US!!!');
     this.contactForm.reset({});
     

    })
  }
}

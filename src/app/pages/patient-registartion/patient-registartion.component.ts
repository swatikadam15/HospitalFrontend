import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators ,FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { BookappointmentService } from 'src/app/bookappointment.service';

@Component({
  selector: 'app-patient-registartion',
  templateUrl: './patient-registartion.component.html',
  styleUrls: ['./patient-registartion.component.css']
})



export class PatientRegistartionComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private patientregi: BookappointmentService,
    router :Router
  ) { }
  submitted = false;


    registerForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    address:['', Validators.required],
    phoneNumber:['', Validators.required],
    email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    password: ['', [Validators.required, Validators.minLength(6)]]
});



get f() { return this.registerForm.controls; }
  ngOnInit(): void {
    
  }
  bookappointment(){
  this.patientregi.patientregistration(this.registerForm.value).subscribe((result)=>{
    console.log(result)
    alert('register successfully');
    this.registerForm.reset({});
   
  })
}

}

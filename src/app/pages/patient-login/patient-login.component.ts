import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookappointmentService } from 'src/app/bookappointment.service';

@Component({
  selector: 'app-patient-login',
  templateUrl: './patient-login.component.html',
  styleUrls: ['./patient-login.component.css']
})
export class PatientLoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private patientlogin:BookappointmentService,private router:Router) { }
  loginForm!: FormGroup;
  submitted = false;
  get f() { return this.loginForm.controls; }
  ngOnInit(): void {

    this.loginForm=this.formBuilder.group({
      email:['',Validators.required],
      password: ['', [Validators.required, Validators.minLength(2)]]
    })
  }
onSubmit(){
  this.patientlogin.patientlogin(this.loginForm.value)
  
  
}
}
;
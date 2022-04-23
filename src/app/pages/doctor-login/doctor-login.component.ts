import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Router } from '@angular/router';
import { BookappointmentService } from 'src/app/bookappointment.service';


@Component({
  selector: 'app-doctor-login',
  templateUrl: './doctor-login.component.html',
  styleUrls: ['./doctor-login.component.css'],
})
export class DoctorLoginComponent implements OnInit {
  constructor(
    private formbuilder: FormBuilder,
    private doctor: BookappointmentService,
    private router:Router
  ) {}
  docotoLogin!: FormGroup;
  ngOnInit(): void {
    this.docotoLogin = this.formbuilder.group({
      email: [''],
      password: [''],
    });
  }
  
  result: any;
  login() {
    this.doctor.doctorlogin(this.docotoLogin.value).subscribe((result) => {
     alert('login successfully')
     this.router.navigate(['/doctor']);
    }, error=>{
      alert("please enter valid details");
    });
  }
}

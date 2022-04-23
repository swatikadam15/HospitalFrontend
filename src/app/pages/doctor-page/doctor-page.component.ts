import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookappointmentService } from 'src/app/bookappointment.service';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-doctor-page',
  templateUrl: './doctor-page.component.html',
  styleUrls: ['./doctor-page.component.css'],
})
export class DoctorPageComponent implements OnInit {
  userid: any;
  valid=false;
  patientData:any
  constructor(
    private router: Router,
    private patient: BookappointmentService,
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.userid = this.patient.getuserid();

    this.patient.getAllPaitent().subscribe((result:any)=>{
      console.log(result)
      this.patientData=result

    })
  }
  reportGenerationForm = this.fb.group({
    // userid:[''],
    // id:['',Validators.required],
    ReportId: ['', Validators.required],
    Service: ['', Validators.required],
    AppointmentDate:['',Validators.required],
    patientDetails:['',Validators.required],
    treatmentDetails:['',Validators.required],
    Recommendation:['',Validators.required]
  });

  data:any;
id:any
  getSinglePatientdata(userid:any){

    this.patient.getappointmentdetails(userid).subscribe((result:any)=>{

      this.data=result

      this.reportGenerationForm.controls['ReportId'].setValue(this.data[0].appintmentId)
      this.reportGenerationForm.controls['Service'].setValue(this.data[0].service)
      this.reportGenerationForm.controls['AppointmentDate'].setValue(this.data[0].appointmentDate) 
      
    
    
    })

  }
  get patientDetails() {
    return this.reportGenerationForm.get('patientDetails');
  }
  get TreatmentDetails() {
    return this.reportGenerationForm.get('treatmentDetails');
  }
  get recommendation() {
    return this.reportGenerationForm.get('Recommendation');
  }


  generatereports(){
    this.patient.generateReport(this.reportGenerationForm.value).subscribe((result:any)=>{
      console.log(result)
      alert("generate report Successfully")
      this.reportGenerationForm.reset({});

    })

  }


}

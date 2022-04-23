import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class BookappointmentService {
  url = 'http://localhost:3000/api/appointment';
  url2="https://localhost:44305/doctor/login";
  url3="https://localhost:44305/patient/register";
url4="https://localhost:44305/patient/verifypatient"
url5="https://localhost:44305/patient/bookappointment"
url6="https://localhost:44305/admin/remove/id"


userid:any;
private authStatusListener=new Subject<boolean>();
private isAutheticated=false

  constructor(private http: HttpClient,private router:Router) {}

  doctorlogin(data:any){
    return this.http.post(this.url2,data)
  }

  patientregistration(data:any){

    return this.http.post(this.url3,data)

  }

  patientlogin(data:any){
    return this.http.post(this.url4,data).subscribe((result:any)=>{
      this.isAutheticated=true
      this.authStatusListener.next(true)
      this.userid=result.id
      console.log(this.userid)
      alert("login successfully")
      this.router.navigate(['/bookappointment'])
      localStorage.setItem('userid',this.userid)
    
    }, error=>{
      alert("please enter correct deatils");
    })
    
  }

  logoutPatient(){
    this.isAutheticated=false;
    this.authStatusListener.next(false)
    this.router.navigate(['/patientlogin'])
  }
 
  getuserid(){
    return this.userid
    console.log
  }

bookappointment(data:any){

  return this.http.post(this.url5,data)

}
cancelBooking(id: any) {
  // console.log(this.cancelBooking);
  return this.http.delete(`https://localhost:44305/admin/remove/${id}`)
}


getAllPaitent() {
  // console.log(this.cancelBooking);
  return this.http.get('https://localhost:44305/patient/Getappointment')
}

getsinglePaitent(id:any){
  return this.http.get("https://localhost:44305/patient/Getappointment/"+id)

}



getAuthStatusListener(){ return this.authStatusListener.asObservable(); }
getIsAuth(){
  return this.isAutheticated

}
getappointmentdetails(id:any){
  console.log(id);
  
  return this.http.get('https://localhost:44305/patient/appdetails/'+id)
}



generateReport(data:any){
  return this.http.post('https://localhost:44305/generate/report/',data)

}





getGeneratedReport(id:any){
  console.log(id);
  
  return this.http.get("https://localhost:44305/patient/getreport/"+id)
}








  //get id
  getapointmentid() {
    return this.http.get(this.url);
  }

  //save appointment
  saveappointmentData(data: any) {
    console.log(data);
    return this.http.post(this.url, data);
  }

  //get all appointment
  getappointment() {
    return this.http.get(this.url + '/all');
  }

  //get single appointment
  getsingleapointmentdata(id:any) {
    console.log(id)
    return this.http.get(this.url+'/singledata/'+id);
  }


  savecontactdata(data:any){
    console.log(data)
    return this.http.post(this.url+'/contact/',data)
  }
  
}

import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BookappointmentService } from 'src/app/bookappointment.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userIsAuthenticated = false;
  private authListenerSub: Subscription = new Subscription;

  constructor(private paitent:BookappointmentService) { }

  ngOnInit(): void {

    this.authListenerSub = this.paitent
    .getAuthStatusListener()
    .subscribe(isAuthenticated => {
      this.userIsAuthenticated = isAuthenticated;
 
    });
  }

  
  logout(){
    this.paitent.logoutPatient()

  }
  ngOnDistroy(){
    this.authListenerSub.unsubscribe()
  }
}

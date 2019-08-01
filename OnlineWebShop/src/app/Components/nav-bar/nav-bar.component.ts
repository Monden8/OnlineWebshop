import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/Services/authentication.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private authsvc : AuthenticationService) { }

  ngOnInit() {
  }
  isLoggedIn() {
    return !this.authsvc.isLoggedIn();
  }
}

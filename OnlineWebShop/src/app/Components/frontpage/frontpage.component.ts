import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/Services/authentication.service';

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.css']
})
export class FrontpageComponent implements OnInit {

  constructor(private authsvc: AuthenticationService) { }

  ngOnInit() {
  }
  isLoggedIn() {
    return !this.authsvc.isLoggedIn();
  }
}

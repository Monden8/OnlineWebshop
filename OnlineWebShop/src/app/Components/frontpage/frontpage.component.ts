import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.css']
})
export class FrontpageComponent implements OnInit {

  constructor(private authsvc: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }
  isLoggedIn() {
    return !this.authsvc.isLoggedIn();
  }
  check() {
    if (!this.isLoggedIn()) {
      //addtocart
    } else {
      this.router.navigate(['/login']);
    }
  }
}

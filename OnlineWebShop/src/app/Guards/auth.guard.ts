import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../Services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authsvc: AuthenticationService, private router: Router) { };
  canActivate() {
    if (!this.authsvc.isLoggedIn()) {
      this.router.navigate(['']);
    }
    return this.authsvc.isLoggedIn();
  }
}

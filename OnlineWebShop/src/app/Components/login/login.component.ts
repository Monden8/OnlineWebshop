import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  valid: boolean = true;

  constructor(private fb: FormBuilder, private router: Router, private authsvc: AuthenticationService) { }

  hasError(controlName: string, errorName: string) {
    return this.form.controls[controlName].hasError(errorName);
  }
  submitData() {
    let user = {
      username: this.form.get('username').value,
      password: this.form.get('password').value
    }
    this.authsvc.login(user).subscribe(
      res => {
        if (!res) {
          this.valid = false;
          setTimeout(() => {
            this.valid = true;
          }, 3000);
        } else {
          this.router.navigate(['']);
        }
      })
  }
  ngOnInit() {
    this.form = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { ItemListService } from 'src/app/Services/item-list.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from "@angular/material"
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.css']
})
export class FrontpageComponent implements OnInit {
  items: Array<any>;
  form: FormGroup;

  constructor(private fb: FormBuilder, private authsvc: AuthenticationService, private item: ItemListService, private dialog: MatDialog) { }

  ngOnInit() {
    this.getAllItems()
    this.form = this.fb.group({
      bid: ['', ,]
    });
  }
  getAllItems() {
    this.item.getItems().subscribe(res => {
      this.items = res
    })
  }
  isLoggedIn() {
    return !this.authsvc.isLoggedIn();
  }
  hasError(controlName: string, errorName: string) {
    return this.form.controls[controlName].hasError(errorName);
  }
  check(_id) {
    if (!this.isLoggedIn()) {
      let data = {
        _id: _id,
        price: this.form.get('bid').value,
        rt: this.authsvc.getRefreshToken()
      }
      this.item.bid(data).subscribe(
        res => {
          if (res) {
            this.form.reset('bid')
            this.getAllItems()
          } else {
            this.dialog.open(DialogComponent, {
              data: { message: "Too low Bid" }
            })
          }
        })
    } else {
      this.dialog.open(DialogComponent, {
        data: { message: "Please Login First" }
      })
    }
  }
}
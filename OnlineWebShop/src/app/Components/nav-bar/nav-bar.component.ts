import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material';
import { ItemListService } from 'src/app/Services/item-list.service';
import { StuffDialogComponent } from '../stuff-dialog/stuff-dialog.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  money: number
  username: string

  constructor(private authsvc: AuthenticationService, private dialog: MatDialog, private itemsvc: ItemListService) { }

  ngOnInit() {
    this.itemsvc.getMoney().subscribe(res => {
      this.money = res.money,
        this.username = res.username
    })
  }

  func(what: string) {
    if (what == 'item') {
      this.itemsvc.getMyItems().subscribe(res => {
        if (res.length < 1) {
          this.dialog.open(DialogComponent, {
            data: { message: 'You did not have any ongoing auctions!' }
          })
        } else {
          this.dialog.open(StuffDialogComponent, {
            data: res
          })
        }
      })
    } else {
      this.itemsvc.getMyCart().subscribe(res => {
        if (res.length < 1) {
          this.dialog.open(DialogComponent, {
            data: { message: 'You did not have any ongoin sales!' }
          })
        } else {
          this.dialog.open(StuffDialogComponent, {
            data: res
          })
        }
      })
    }
  }
  isLoggedIn() {
    return !this.authsvc.isLoggedIn();
  }
  logout() {
    this.authsvc.logout().subscribe()
  }
}

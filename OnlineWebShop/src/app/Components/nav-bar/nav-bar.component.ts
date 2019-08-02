import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material';
import { ItemListService } from 'src/app/Services/item-list.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private authsvc: AuthenticationService, private dialog: MatDialog, private itemsvc: ItemListService) { }

  ngOnInit() {
  }
  func(what: string) {
    this.itemsvc.getMyItems()
    this.dialog.open(DialogComponent, {
      data: {
        Item: jani,
        Cost: jani
      }
    })
  }
  isLoggedIn() {
    return !this.authsvc.isLoggedIn();
  }
  logout() {
    this.authsvc.logout().subscribe()
  }
}

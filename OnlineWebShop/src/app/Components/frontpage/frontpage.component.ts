import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { Router } from '@angular/router';
import { ItemListService } from 'src/app/Services/item-list.service';

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.css']
})
export class FrontpageComponent implements OnInit {
  items: Array<any>;

  constructor(private authsvc: AuthenticationService, private router: Router, private item: ItemListService) { }

  ngOnInit() {
    this.getAllItems()
  }
  getAllItems() {
    this.item.getItems().subscribe(res => {
      this.items = res
    })
  }
  isLoggedIn() {
    return !this.authsvc.isLoggedIn();
  }
  check(_id, price) {
    if (!this.isLoggedIn()) {
      let data = {
        _id: _id,
        price: price,
        rt: this.authsvc.getRefreshToken()
      }
      this.item.bid(data).subscribe(res => {
        this.items = res
      });
    } else {
      this.router.navigate(['/login']);
    }
  }
}

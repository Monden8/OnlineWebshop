import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';
import { Component, OnInit } from '@angular/core';
import { ItemListService } from 'src/app/Services/item-list.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private items: ItemListService, private dialog: MatDialog) { }

  hasError(controlName: string, errorName: string) {
    return this.form.controls[controlName].hasError(errorName);
  }
  submitData() {
    let data = {
      name: this.form.get('title').value,
      price: this.form.get('money').value,
      expiryDate: this.form.get('exp').value,
      img: this.form.get('img').value,
      details: this.form.get('detail').value,
      usage: this.form.get('usage').value
    }
    this.items.submit(data)
      .subscribe(
        res => {
          if (!res) {
            this.dialog.open(DialogComponent, {
              data: { message: "YoU sUcK" }
            })
          } else {
            this.router.navigate(['']);
          }
        })
  }

  ngOnInit() {
    this.form = this.fb.group({
      title: ['', [Validators.required]],
      money: ['', [Validators.required]],
      exp: ['', [Validators.required]],
      detail: ['', [Validators.required]],
      usage: ['', [Validators.required]],
      img: ['', [Validators.required]]
    });
  }
}


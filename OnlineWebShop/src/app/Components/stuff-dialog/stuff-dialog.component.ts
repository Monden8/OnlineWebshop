import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app--stuff-dialog',
  templateUrl: './stuff-dialog.component.html',
  styleUrls: ['./stuff-dialog.component.css']
})
export class StuffDialogComponent implements OnInit {
  name: string;
  price: number;
  constructor(
    @Inject(MAT_DIALOG_DATA) data,
    public dialogRef: MatDialogRef<StuffDialogComponent>
  ) {
    dialogRef.disableClose = true;

    this.name = data.name;
    this.price = data.price;
  }

  ngOnInit() { }

  close() {
    this.dialogRef.close();
  }
}


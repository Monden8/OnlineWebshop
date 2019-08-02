import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app--stuff-dialog',
  templateUrl: './stuff-dialog.component.html',
  styleUrls: ['./stuff-dialog.component.css']
})
export class StuffDialogComponent implements OnInit {

  respon: Array<any>

  constructor(
    @Inject(MAT_DIALOG_DATA) data,
    public dialogRef: MatDialogRef<StuffDialogComponent>
  ) {
    dialogRef.disableClose = true;
    this.respon = data
  }

  ngOnInit() { }

  close() {
    this.dialogRef.close();
  }
}


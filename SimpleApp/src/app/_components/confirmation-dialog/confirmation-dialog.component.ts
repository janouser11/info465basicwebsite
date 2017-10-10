import { Component, OnInit, Input } from '@angular/core';
import { MdDialogRef, MdDialog } from '@angular/material';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialogComponent implements OnInit {

  constructor(public dialogRef: MdDialogRef<ConfirmationDialogComponent>) { }

  public confirmMessage:string;
  public imageUrl: string;
  public price : number;

  ngOnInit() {
  }

}

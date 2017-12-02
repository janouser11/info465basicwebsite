import { Component, OnInit, Input, Inject } from '@angular/core';
// import { MatDialogRef, MatDialog, MAT_DIALOG_DATA} from '@angular/material';
import { MatDialogModule, MatDialog, MatDialogRef , MAT_DIALOG_DATA} from '@angular/material/dialog'

import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  public confirmMessage:string;
  public imageUrl: string;
  public price : number;

  public login: boolean;


  ngOnInit() {
  }


  onNoClick(): void {
    this.dialogRef.close();
  }
  loginClick (formUsername, formPassword){
    // this.dialogRef.close(true)

   let username = formUsername;
   let password = formPassword;

   console.log("Username: " + username + "\nPassword: " + password);
  }

  closeClick (){
    this.dialogRef.close(false)
  }

}

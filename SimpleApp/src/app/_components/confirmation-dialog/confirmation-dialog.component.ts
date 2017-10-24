import { Component, OnInit, Input } from '@angular/core';
import { MdDialogRef, MdDialog } from '@angular/material';
import {NgForm} from '@angular/forms';

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

  public login: boolean;


  ngOnInit() {
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

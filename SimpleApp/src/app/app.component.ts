import {Component, OnInit, Inject} from '@angular/core';
import {ProductService} from "./_services/product.service";
import {IProduct} from "./_interfaces/product";
// import {MdDialog, MdDialogRef} from "@angular/material";
import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule
  // MatDialog,
  // MatDialogRef
} from '@angular/material';
// import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { MatDialogModule, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'
import {ConfirmationDialogComponent} from "./_components/confirmation-dialog/confirmation-dialog.component";
import { Observable } from 'rxjs/Observable';
import { AngularFirestore,AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

import 'rxjs/add/operator/map';

import {LoginService} from "./_services/login.service";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  products: IProduct;
  // dialogRef: MatDialogRef<ConfirmationDialogComponent>;
  items: Observable<any[]>;


  animal: string;
  name: string;
  dialogRef: any;

  private _productService: ProductService;
  constructor(service: ProductService, private afs: AngularFirestore, public dialog: MatDialog ) {
      this._productService = service;
  }



  // login() {
  //   this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  // }
  // logout() {
  //   this.afAuth.auth.signOut();
  // }

  openConfirmationDialog(product: IProduct) {
  
    
     this.dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      disableClose: false
    });
    this.dialogRef.componentInstance.confirmMessage = `Are you sure you wish to buy ${product.title} for $${product.price}?`;
    this.dialogRef.componentInstance.imageUrl = product.imageUrl;


    this.dialogRef.afterClosed().subscribe(result => {
      if(result) {
        // do confirmation actions
      }
      this.dialogRef = null;
    });
  }

  // //need to create new component called login-dialog that displays simple username and password input
  // //get the username and password and store it in a object called user
  // openLogin() {
  //   this.dialogRef = this.dialog.open(ConfirmationDialogComponent, {
  //     disableClose: false
  //   });

  //   this.dialogRef.componentInstance.login = true;

  //   this.dialogRef.afterClosed().subscribe(result => {
  //     if(result) {
  //       // do confirmation actions
  //       //set login = true;
  //     }
  //     this.dialogRef = null;
  //   });
  // }


  ngOnInit(): void{
    // this._loginService.checkCredentials();
    this._productService.getData()
      .subscribe(
        data => {this.products = data;},
        error => console.log(error)
      );
  }
}



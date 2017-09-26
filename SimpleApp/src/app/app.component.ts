import {Component, OnInit} from '@angular/core';
import {ProductService} from "./_services/product.service";
import {IProduct} from "./_interfaces/product";
import {MdDialog, MdDialogRef} from "@angular/material";
import {ConfirmationDialogComponent} from "./_components/confirmation-dialog/confirmation-dialog.component";
import {AngularFireDatabase, FirebaseListObservable} from "angularfire2/database";
import {AngularFireAuth} from "angularfire2/auth";
import {auth} from "firebase/app";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  products: IProduct;
  dialogRef: MdDialogRef<ConfirmationDialogComponent>;
  items: FirebaseListObservable<any[]>;

  private _productService: ProductService;

  constructor(service: ProductService, public dialog: MdDialog, db: AngularFireDatabase, afAuth: AngularFireAuth) {
      this._productService = service;
      //pulls items from list
      this.items = db.list('items');
    //create items
    //update
    db.list('testing4').set("setting", {
      username: "name",
      email: "email",
      profile_picture : "imageurl"
    });


      // removes items
      // db.list('items').remove();

      afAuth.auth.signInAnonymously();

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


  ngOnInit(): void{
    this._productService.getData()
      .subscribe(
        data => {this.products = data;},
        error => console.log(error)
      );
  }
}

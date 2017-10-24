import {Component, OnInit} from '@angular/core';
import {ProductService} from "./_services/product.service";
import {IProduct} from "./_interfaces/product";
import {MdDialog, MdDialogRef} from "@angular/material";
import {ConfirmationDialogComponent} from "./_components/confirmation-dialog/confirmation-dialog.component";
import {AngularFireDatabase, FirebaseListObservable} from "angularfire2/database";
import {AngularFireAuth} from "angularfire2/auth";
import {auth} from "firebase/app";
import {LoginService} from "./_services/login.service";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  products: IProduct;
  dialogRef: MdDialogRef<ConfirmationDialogComponent>;
  items: FirebaseListObservable<any[]>;

  private _productService: ProductService;
  // https://github.com/angular/angularfire2/blob/master/docs/2-retrieving-data-as-objects.md
  constructor(service: ProductService, public dialog: MdDialog, db: AngularFireDatabase, afAuth: AngularFireAuth) {
      this._productService = service;
      //pulls items from list
      this.items = db.list('products');



    //set overwrites anything
    let itemRef = db.object('products');
    itemRef.set({
      product1: {
        "title": "Camo Hat",
        "price": 1.55,
        "discount": 10,
        "imageUrl": "https://steamcommunity-a.opskins.media/economy/image/8HAGSsiO9OXk0bu4o76O6xabNUY8RRLf00e56zWT3IZUH8Flab9goIFna_837oFuZVQvrmhx3qr2q44kS6-IaJcTfw/256fx256f",
        "content": "Fancy camouflage hat to replace the pointless helmet most people wear."
      },
      product2: {
        "title": "Camo Shorts",
        "price": 2.25,
        "discount": 20,
        "imageUrl": "https://steamcommunity-a.opskins.media/economy/image/8HAGSsiO9OXk0bu4o76O6xabNUY8RRLf00e56zWT3IZUH8Flab9goIFna_837oFuZVQvrmh13qr2ro4kS69dwhWs9g/256fx256f",
        "content": "Camouflaged shorts to help with being a bush wookie."
      }
    });

    //create items
    let itemRef2 = db.object('products');
    itemRef2.update({
      product3:  {
        "title": "Fancy Boots",
        "price": 3.45,
        "discount": 30,
        "imageUrl": "https://steamcommunity-a.opskins.media/economy/image/8HAGSsiO9OXk0bu4o76O6xabNUY8RRLf00e56zWT3IZUH8Flab9goIFna_837oFuZVQtrmh03qr2ro4kS6_uYYfxqg/256fx256f",
        "content": "Obnoxious boots to alert your enemies with!"
      }

    });





      // removes items
      // db.list('products').remove("product1");

      // afAuth.auth.signInAnonymously();

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

  //need to create new component called login-dialog that displays simple username and password input
  //get the username and password and store it in a object called user
  openLogin() {
    this.dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      disableClose: false
    });

    this.dialogRef.componentInstance.login = true;

    this.dialogRef.afterClosed().subscribe(result => {
      if(result) {
        // do confirmation actions
        //set login = true;
      }
      this.dialogRef = null;
    });
  }


  ngOnInit(): void{
    // this._loginService.checkCredentials();
    this._productService.getData()
      .subscribe(
        data => {this.products = data;},
        error => console.log(error)
      );
  }
}

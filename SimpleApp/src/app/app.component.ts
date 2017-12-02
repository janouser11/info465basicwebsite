import {Component, OnInit, Inject} from '@angular/core';
import {ProductService} from "./_services/product.service";
import {IProduct} from "./_interfaces/product";
import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule
} from '@angular/material';
import { MatDialogModule, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'
import {ConfirmationDialogComponent} from "./_components/confirmation-dialog/confirmation-dialog.component";
import { Observable } from 'rxjs/Observable';


import 'rxjs/add/operator/map';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  products: any;
  dialogRef: any;

  private _productService: ProductService;
  constructor(service: ProductService, public dialog: MatDialog ) {
      this._productService = service;
  }


  ngOnInit(): void{
        this.products = this._productService.getProducts();
        console.log(this.products);
  }


  //dialog for product
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


  //dialog for admin functions
  openAdmin() {
    this.dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      disableClose: false
    });

    this.dialogRef.componentInstance.login = true;

    this.dialogRef.afterClosed().subscribe(result => {
      if(result) {
        // do confirmation actions
      }
      this.dialogRef = null;
    });
  }


  
}



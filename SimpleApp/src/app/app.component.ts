import {Component, OnInit} from '@angular/core';
import {ProductService} from "./_services/product.service";
import {IProduct} from "./_interfaces/product";
import {Observable} from "rxjs/Observable";
import {MdDialog, MdDialogRef} from "@angular/material";
import {ConfirmationDialogComponent} from "./_components/confirmation-dialog/confirmation-dialog.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  products: IProduct;
  dialogRef: MdDialogRef<ConfirmationDialogComponent>;

  private _productService: ProductService;

  constructor(service: ProductService, public dialog: MdDialog) {
      this._productService = service;
  }

  openConfirmationDialog(product: IProduct) {
    this.dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      disableClose: false
    });
    this.dialogRef.componentInstance.confirmMessage = `Are you sure you wish to buy ${product.title} ?`;
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

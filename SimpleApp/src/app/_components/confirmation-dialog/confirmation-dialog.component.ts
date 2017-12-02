import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialogModule, MatDialog, MatDialogRef , MAT_DIALOG_DATA} from '@angular/material/dialog'
import { AngularFirestore,AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import {IProduct} from "../../_interfaces/product";
import { Observable } from 'rxjs/Observable';
import {ProductService} from "../../_services/product.service";
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialogComponent implements OnInit {

  private _productService: ProductService;
  
  constructor(public dialogRef: MatDialogRef<ConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private afs: AngularFirestore, service: ProductService) {
        this._productService = service;
     }

  public confirmMessage:string;
  products: any;
  product: IProduct = {} as any;


  ngOnInit(): void{
       this.products = this._productService.getProducts();
      }
    

  onNoClick(): void {
    this.dialogRef.close();
  }
 
  closeClick (){
    this.dialogRef.close(false)
  }


  addProduct() {
    this._productService.addProduct(this.product);
  }

  deleteProduct(productId) {
    this._productService.deleteProduct(productId);
  }

}

import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map'
import {Observable} from "rxjs/Observable";
import {IProduct} from "../_interfaces/product";
import { AngularFirestore,AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

@Injectable()
export class ProductService {

  _data: any;
  products: any;
  productsCol: AngularFirestoreCollection<IProduct>;
  product: Observable<IProduct>;
  productDoc: AngularFirestoreDocument<IProduct>;


  
  title: string;
  price: any;
  discount: any;
  imageUrl: string;
  content: string;



  constructor(private http: Http, private afs: AngularFirestore) {

  }

  getData(): Observable<IProduct> {
    return this.http
      .get('../assets/json/products.json')
      .map(x => x.json() )
      .map( (data) =>
        this._data = data
      );
  }

  getProducts(){
    this.productsCol = this.afs.collection('products');
    
        this.products = this.productsCol.snapshotChanges()
        .map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data() as IProduct;
            const id = a.payload.doc.id;
            return { id, data };
          });
        });

        return this.products;
  }

  addProduct(product: IProduct) {
    this.afs.collection('products').add({'title': product.title,  'price': product.price ,'discount': product.discount , 'imageUrl': product.imageUrl, 'content': product.content});
  }

  deleteProduct(productId) {
    this.afs.doc('products/'+productId).delete();
  }

}

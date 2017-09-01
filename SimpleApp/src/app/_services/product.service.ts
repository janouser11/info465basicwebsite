import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map'
import {Observable} from "rxjs/Observable";
import {IProduct} from "../_interfaces/product";

@Injectable()
export class ProductService {

  _data: any;

  constructor(private http: Http) {

  }

  getData(): Observable<IProduct> {
    return this.http
      .get('../assets/json/products.json')
      .map(x => x.json() )
      .map( (data) =>
        this._data = data
      );
  }
}

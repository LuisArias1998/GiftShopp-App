import { Injectable } from '@angular/core';
import { IProduct } from '../interface/IProduct';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products:IProduct[];
  singleProduct:IProduct;
  URL:string = 'https://localhost:44383';
  constructor(private _http:HttpClient) { 
  }

  loadProducts():any{
    return this._http.get<[IProduct]>(`${this.URL}/api/products`)
      .pipe(map(data =>{
        this.products=data;
        return;
      }));
  }
  getProducts():IProduct[]{
    return this.products;
  }

  getProductById(idProduct:number):any{
    return this._http.get<IProduct>(`${this.URL}/api/products/${idProduct}`)
      .pipe(map(data=>{
        this.singleProduct=data;
        return;
      }))
  }
  getProductsByCategory(cat:string):any{
    var temp = this.products.filter(cp=>cp.category.includes(cat));
    return temp;
  }
  getProductsByName(na:string){
    var temp = this.products.filter(cp=>cp.productName.toLowerCase().includes(na.toLowerCase()));
    return temp;
  }
}

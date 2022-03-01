import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from 'src/app/interface/IProduct';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UpdateProductService {
  URL:string = 'https://localhost:44383';
  constructor(private http:HttpClient) { }

  putProduct(model:IProduct){
    return this.http.put<IProduct>(`${this.URL}/api/products/`,model)
      .pipe(map(data=>{}))
  }
}

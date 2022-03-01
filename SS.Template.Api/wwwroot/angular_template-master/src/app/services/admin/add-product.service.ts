import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '../../interface/IProduct';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AddProductService {
  URL:string = 'https://localhost:44383';
  constructor(private http:HttpClient) {}

  public postProduct(model:IProduct){
    console.log(model);
    return this.http.post<IProduct>(`${this.URL}/api/products`,model)
      .pipe(map(data=>{}));
  }
}

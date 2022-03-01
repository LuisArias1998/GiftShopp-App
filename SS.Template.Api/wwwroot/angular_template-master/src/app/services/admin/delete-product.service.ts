import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from 'src/app/interface/IProduct';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DeleteProductService {
  URL:string = 'https://localhost:44383';
  constructor(private http:HttpClient) { }

  deleteProduct(id:number){
    return this.http.delete<IProduct>(`${this.URL}/api/products/${id}`)
      .pipe(map(data=>{}))
  }
}

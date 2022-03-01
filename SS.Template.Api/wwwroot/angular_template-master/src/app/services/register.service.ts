import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../interface/IUser';
import { map } from 'rxjs/operators';
import { ICustomer } from '../interface/ICustomer';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  URL:string = 'https://localhost:44383';
  constructor(private http:HttpClient) { }

  postRegister(user:IUser){
    return this.http.post<IUser>(`${this.URL}/api/account/sign-up`,user).pipe(map(data=>{}));
  }
  postCustomer(customer:ICustomer){
    return this.http.post<IUser>(`${this.URL}/api/Customers`,customer).pipe(map(data=>{}));
  }
}

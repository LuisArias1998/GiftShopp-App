import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../interface/IUser';
import { map } from 'rxjs/operators';
import { AuthState } from '../core/services/auth.service';
import { AuthModel } from '../common/models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  URL = 'https://localhost:44383';
  constructor(private _http: HttpClient, private auth: AuthState) { }
  user: any;
  get(): any {
    return this._http.get<IUser>(`${this.URL}/api/account/info`)
      .pipe(map(data => {
        this.user = data;
        return;
      }));
  }
}

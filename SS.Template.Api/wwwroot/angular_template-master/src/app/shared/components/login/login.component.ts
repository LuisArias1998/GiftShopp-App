import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { IUser } from '../../../interface/IUser';
import { AuthState, AuthService } from '../../../core/services/auth.service';
import { AuthModel } from 'src/app/common/models/auth.model';
import { ErrorHandlerService } from 'src/app/core/services/error-handler.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  constructor(private _route: Router, private _auth: AuthService, 
    private _authState: AuthState, private _error: ErrorHandlerService) {

  }

  public creds: IUser = {
    FirstName:'',
    LastName:'',
    Email: '',
    Password: ''
  };
  ngOnInit(): void {

  }

  onLogin() {
    //Subscribe with the login credentiasl
    this._auth.login(this.creds).subscribe(
    res => {
      //get the user info and set into the auth service and auth state
      const user: AuthModel = {
        id: res.user.id,
        email: res.user.email,
        name: res.user.email,
        roles: res.role,
        expiresIn: 0
      };
      this._authState.set(user);
      this._auth.isAuthenticated().subscribe(res =>{});
      this._auth.getAuthInfo().subscribe(
        res => {
          this._route.navigateByUrl('/');
        },
        err => {
          this._error.handle(err);
        }
      );
    }, err => {
      this._error.handle(err);
    });
  }
}

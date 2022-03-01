import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { IUser } from '../../../interface/IUser';
import { AuthState, AuthService } from '../../../core/services/auth.service';
import { AuthModel } from 'src/app/common/models/auth.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  constructor(private _route: Router, private _auth: AuthService, 
    private _authState: AuthState) {

  }

  public creds: IUser = {
    FirstName:'',
    LastName:'',
    Email: '',
    Password: ''
  };
  err;   ngOnInit(): void {

  }

  onLogin() {
    console.log(this.creds);
    this._auth.login(this.creds).subscribe(
    res => {
      console.log(res);
      const user: AuthModel = {
        id: res.user.id,
        email: res.user.email,
        name: res.user.email,
        roles: res.role,
        expiresIn: 0
      };
      this._authState.set(user);
      this._auth.isAuthenticated().subscribe(res => console.log(res));
      this._auth.getAuthInfo().subscribe(
        res => {
          console.log(res);
          this._route.navigateByUrl('/');
        },
        err => console.log(err)
      );
    }, err => {
      alert('Err ' + err);
    });
  }
}

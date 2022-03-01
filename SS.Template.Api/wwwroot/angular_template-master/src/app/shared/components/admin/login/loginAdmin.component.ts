import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthModel } from 'src/app/common/models/auth.model';
import { AuthService, AuthState } from 'src/app/core/services/auth.service';
import Swal from 'sweetalert2';
import { IUser } from '../../../../interface/IUser';

@Component({
    selector: 'app-loginadmin',
    templateUrl:'./loginAdmin.component.html',
    styleUrls:['./loginAdmin.component.scss']
})
export class LoginAdminComponent implements OnInit{
    public creds:IUser = {
        FirstName:"",
        LastName:"",
        Email: "",
        Password: ""
    };
    constructor(private _auth: AuthService, private _authState: AuthState, private _route: Router){

    }
    ngOnInit(): void {
        
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
          if(user.roles[0]=='Admin'){
            this._authState.set(user);
            this._auth.isAuthenticated().subscribe(res => console.log(res));
            this._auth.getAuthInfo().subscribe(
            res => {
              console.log(res);
              this._route.navigateByUrl('/index');
            },
            err => console.log(err)
            );
          }else{
            Swal.fire({
                icon: 'error',
                title: 'User not authorized',
                heightAuto:true,
                showConfirmButton: false,
                timer: 1500
              });
          }
          
        }, err => {
          alert('Err ' + err);
        });
      }

}
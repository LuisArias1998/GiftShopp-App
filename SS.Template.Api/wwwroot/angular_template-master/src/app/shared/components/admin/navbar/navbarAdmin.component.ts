import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService, AuthState } from "src/app/core/services/auth.service";

@Component({
    selector:'app-navbaradmin',
    templateUrl:'./navbarAdmin.component.html',
    styleUrls:['./navbarAdmin.component.scss']
})

export class NavbarAdminComponent{
    
    constructor(private _authSvc: AuthService, private _route: Router,
        private _authState: AuthState){

    }

    onLogOut(){
        this._authSvc.logOut();
        
    }
}
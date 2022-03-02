import { Component, Input, OnInit } from "@angular/core";
import { AuthService } from "src/app/core/services/auth.service";

@Component({
    selector:'app-navbar',
    templateUrl:'./navbar.component.html',
    styleUrls:['./navbar.component.scss']
})

export class NavbarComponent implements OnInit{

    @Input() isLogged:boolean 

    constructor(private _authSvc:AuthService){

    }

    ngOnInit(): void {

    }

    onLogOut(){
        this._authSvc.logOut();
        this.isLogged=false;
        window.location.reload();
    }

    

    
}
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { IUser } from '../../../interface/IUser';
import { RegisterService } from '../../../services/register.service';
import { ICustomer } from '../../../interface/ICustomer';
import { Router } from '@angular/router';
import { ErrorHandlerService } from 'src/app/core/services/error-handler.service';

@Component({
    selector:'app-register',
    templateUrl:'./register.component.html',
    styleUrls:['./register.component.scss']
})
export class RegisterComponent implements OnInit{
    public titlePattern:string[]=[
        "•The password length must be greater than or equal to 8",
        "•The password must contain one or more uppercase characters" ,
        "•The password must contain one or more lowercase characters" ,
        "•The password must contain one or more lowercase characters" ,
        "•The password must contain one or more lowercase characters" 
    ]
    public creds:IUser = {
        FirstName:"",
        LastName:"",
        Email: "",
        Password: ""
      };
    constructor(private _registerSvc:RegisterService, private route:Router,
        private _error: ErrorHandlerService){

    }

    ngOnInit(): void {
        
    }
    onSignUp(){
        this._registerSvc.postRegister(this.creds).subscribe(
            res=>{
                this.route.navigateByUrl("/login");
                
            },
            err=>{
                this._error.handle(err);
            });
    }

}
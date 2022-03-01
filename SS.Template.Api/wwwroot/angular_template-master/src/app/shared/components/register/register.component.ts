import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { IUser } from '../../../interface/IUser';
import { RegisterService } from '../../../services/register.service';
import { ICustomer } from '../../../interface/ICustomer';
import { Router } from '@angular/router';

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
    constructor(private _registerSvc:RegisterService, private route:Router){

    }

    ngOnInit(): void {
        
    }
    onSignUp(){
        let customer:ICustomer={
            name:this.creds.FirstName+" "+this.creds.LastName,
            city:'',
            orderTotal:0,
            status:1,
            dateCreated:new Date(),
            dateUpdated:new Date(),
            email:this.creds.Email
        }
        this._registerSvc.postRegister(this.creds).subscribe(
            res=>{
                this.route.navigateByUrl("/login");
                // this._registerSvc.postCustomer(customer).subscribe(res=>{
                //     this.route.navigateByUrl("/login");
                // },err=>{})
            },
            err=>{
                Swal.fire({
                    icon: 'error',
                    title: 'Error in your registration',
                    showConfirmButton: false,
                    timer: 1500
                })
            });
    }

}
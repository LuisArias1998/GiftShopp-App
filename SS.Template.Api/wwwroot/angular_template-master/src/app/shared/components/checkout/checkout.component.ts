import { Component, Input, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { CartService } from '../../../services/cart.service';
import Swal from "sweetalert2";
import { Router } from "@angular/router";
import { ICustomer } from "src/app/interface/ICustomer";
import { AuthService } from "src/app/core/services/auth.service";

@Component({
    selector:'app-checkout',
    templateUrl:'./checkout.component.html',
    styleUrls:['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit{
    @Input() isLogged:boolean;
    public creds = {
        street: "",
        city: "",
        region:"",
        zipCode:"",
        telephone:"",
        FirstName:"",
        LastName:""
    };

    customers:ICustomer[]=[];
    oneCustomer:ICustomer;

    constructor(private _http:HttpClient, private _cartSvc:CartService,
        private _router:Router, private _auth: AuthService){
        
    }
    ngOnInit(): void {
        
    }
    onCheckout(){
        if(this.isLogged){
            console.log("in checkout component")

               try{
                this._auth.getAuthInfo().subscribe(
                  data => {
                    console.log(data);
                    this.isLogged=true;
                    // this.oneCustomer = this.customers.find(c=>c.email.includes(data.email));
                    // console.log(this.oneCustomer)
                        let order=this._cartSvc.getOrder();
                        let newCustomer:ICustomer={
                            name:this.creds.FirstName+" "+this.creds.LastName,
                            city:this.creds.city,
                            orderTotal:this._cartSvc.total,
                            status:1,
                            dateCreated:new Date(),
                            dateUpdated:new Date(),
                            email:data.email
                        }
                        order.customer=newCustomer;
                        order.items.forEach(c => c.id=null);
                        console.log("Se imprimió la order: ",order.customer);
                        this._cartSvc.postOrder(order).subscribe(
                            res=>{
                                Swal.fire({
                                    icon: 'success',
                                    title: 'Purchase completed',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            },err=>{console.log("Salió mal")})
                    
                  }, err => {
                  //this._error.handle(err);
                  // this._auth.getAuthInfo().subscribe(data => {
                  //     console.log(data);
                  //   });
                });
              }catch(ex){
              }
            
        }else{
            Swal.fire({
                icon: 'warning',
                title: 'You need to login first',
                heightAuto:true,
                showConfirmButton: false,
                timer: 1500
            });  
            setTimeout(()=>{
                this._router.navigateByUrl("/login")
            }, 1500);
            
        }
    }
}
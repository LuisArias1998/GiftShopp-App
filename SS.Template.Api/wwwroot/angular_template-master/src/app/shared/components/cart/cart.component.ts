import { Component, OnInit } from '@angular/core';
import $ from 'jquery'
import { ProductsService } from '../../../services/products.service';
import { CartService } from '../../../services/cart.service';
import { IProduct } from '../../../interface/IProduct';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss']
  })
export class CartComponent implements OnInit{

    clickCount:number = 0;
    clickCountExpress:number = 1;
    cartProducts:IProduct[];
    subtotal:number;
    isLogged:boolean=false;
    total:number;
    public creds = {
        street: "",
        city: "",
        region:"",
        zipCode:"",
        telephone:""
    };
    constructor(private _productSvc:ProductsService, private _cartSvc:CartService,
        private _auth: AuthService, private _router:Router){
        this.cartProducts=this._cartSvc.order.items;
    }
    ngOnInit(): void {
        this.subtotal = this._cartSvc.order.subtotal;
        this.total=this.subtotal+=6.99;
        this._cartSvc.total=this.total;
        try{
            this._auth.getAuthInfo().subscribe(
              data => {
                console.log(data);
                this.isLogged=true;
    
              }, err => {
              //this._error.handle(err);
              // this._auth.getAuthInfo().subscribe(data => {
              //     console.log(data);
              //   });
            });
          }catch(ex){
          }
    }
    onStandard(){
        this.clickCountExpress=0;
        if(this.clickCount<1){
            this.total-=2;
            this._cartSvc.total=this.total;
        }
        this.clickCount++
    }
    onExpress(){
        this.clickCount=0;
        if(this.clickCountExpress<1){
            this.total+=2;
            this._cartSvc.total=this.total;
        }
        this.clickCountExpress++;
    }
    onCheckout(){
        
    }
}
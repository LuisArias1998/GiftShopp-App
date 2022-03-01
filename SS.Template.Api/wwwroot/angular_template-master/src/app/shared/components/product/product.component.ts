import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../../services/products.service';
import { IProduct } from '../../../interface/IProduct';
import { CartService } from '../../../services/cart.service';
import Swal from 'sweetalert2';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
    selector:'app-component',
    templateUrl:'./product.component.html',
    styleUrls:['./product.component.scss']
})
export class ProductComponent implements OnInit{
    
    product:IProduct;
    id:number;
    hasInfo:boolean=false;
    isLogged:boolean=false;
    productImg:string="";
    productName:string="";
    productCategory:string="";
    productPrice:number;
    productDescription:string=""
    constructor(private _activatedRoute:ActivatedRoute, public _productService:ProductsService,
        public _cartSvc:CartService, private _auth: AuthService, private _router:Router){
        
    }
    ngOnInit(): void {
        //CONVERTED TO NUMBER 
        this.id=+this._activatedRoute.snapshot.params.id;
        this._productService.getProductById(this.id).subscribe(()=>{
            try{
                this.product=this._productService.singleProduct;
                this.productName=this.product[0].productName;
                this.productDescription=this.product[0].productDescription;
                this.productCategory=this.product[0].productCategory;
                this.productImg=this.product[0].productImg;
                this.productPrice=this.product[0].unitPrice;
                this.hasInfo=true;
            }catch(ex){

            }
        }); 
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

    addToCart(){
        this._cartSvc.addToOrder(this.product[0]);
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Product added to cart',
            heightAuto:true,
            showConfirmButton: false,
            timer: 1500
        })
    }
}
import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../../../interface/IProduct';
import { HttpClient } from '@angular/common/http';
import { AddProductService } from '../../../../services/admin/add-product.service';
import Swal from 'sweetalert2';

@Component({
    selector:'app-addproduct',
    templateUrl:'./addProduct.component.html',
    styleUrls:['./addProduct.component.scss']
})
export class AddProductComponent implements OnInit{
    public product:IProduct = {
        productName: "",
        productDescription: "",
        quantity:0,
        unitPrice:0,
        productImg:"",
        category:""
    };
    constructor(private _http:HttpClient, private _addSvc:AddProductService){

    }
    ngOnInit(): void {
        
    }
    onAddProduct(){
        console.log(this.product);
        this._addSvc.postProduct(this.product).subscribe(
            res=>{
                Swal.fire({
                    icon: 'success',
                    title: 'Your product has been added',
                    showConfirmButton: false,
                    timer: 1500
                })
            },err=>{
                Swal.fire({
                    icon: 'error',
                    title: 'Your product has not been added',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        
        );
    }
}
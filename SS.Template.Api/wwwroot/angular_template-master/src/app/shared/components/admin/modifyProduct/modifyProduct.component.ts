import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../../services/products.service';
import { IProduct } from '../../../../interface/IProduct';
import { ActivatedRoute } from '@angular/router';
import { UpdateProductService } from '../../../../services/admin/update-product.service';
import Swal from 'sweetalert2';

@Component({
    selector:'app-modifyproduct',
    templateUrl:'./modifyProduct.component.html',
    styleUrls:['./modifyProduct.component.scss']
})
export class ModifyProductComponent implements OnInit{

    product:IProduct;
    productWithoutChanges:IProduct;
    id:number;
    constructor(private _productSvc:ProductsService, private _activatedRouter:ActivatedRoute,
        private _updateSvc:UpdateProductService){

    }
    ngOnInit(): void {
        this.id = +this._activatedRouter.snapshot.params.id;
        this.product=this._productSvc.getProductById(this.id);
    }
    onModifyProduct(){
        this._updateSvc.putProduct(this.product).subscribe(
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
        });
    }
}
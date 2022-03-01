import { Component, OnInit } from '@angular/core';
import { AuthService, AuthState } from 'src/app/core/services/auth.service';
import { ProductsService } from 'src/app/services/products.service';
import Swal from 'sweetalert2';
import { IProduct } from '../../../../interface/IProduct';
import { DeleteProductService } from '../../../../services/admin/delete-product.service';

@Component({
    selector:'app-indexadmin',
    templateUrl:'./indexAdmin.component.html',
    styleUrls:['indexAdmin.component.scss']
})
export class IndexAdminComponent implements OnInit{
    categoriesList;
    products:IProduct[]
    searchBar:string;
    isProductsEmpty:boolean=true;
    constructor(private _productSvc:ProductsService, private _deleteSvc:DeleteProductService,
      private _auth: AuthService, private _authState: AuthState){
      if(this.products){
        this.isProductsEmpty=false;
      }else{
        this.isProductsEmpty=true;
      }
    }
    ngOnInit(): void {
      this._productSvc.loadProducts().subscribe(()=>{
        try{
          this.products=this._productSvc.products;
          this.setCategoriesList();
          if(this.products.length===0){
            this.isProductsEmpty=true;
          }else{
            this.isProductsEmpty=false;
          }
        }catch(ex){
          this.isProductsEmpty=true;
        }
      });

      try{
        this._auth.getAuthInfo().subscribe(
          data => {
            console.log(data);
            //this.isLogged=true;

          }, err => {
          //this._error.handle(err);
          // this._auth.getAuthInfo().subscribe(data => {
          //     console.log(data);
          //   });
        });
      }catch(ex){
      }
    }
    setCategoriesList(){
        let catList:string[]=[];
        this.products.forEach((cp,index)=>{
          catList[index]=cp.category; 
        })
        //NON REPEATED ITEMS
        const dataArr = new Set(catList);
        this.categoriesList=dataArr;
    }
    filterByCategory(e:any){
        let category:string = e.target.text.replace("(current)","")
        category = category.substring(1,category.length-1)
    
        this.products = this._productSvc.getProductsByCategory(category);
    }
    listAll(){
        this.products=this._productSvc.getProducts();
        if(this.products)
          this.isProductsEmpty=false;
        else
          this.isProductsEmpty=true;
    }
    onSearchForProduct(){
      try{
        this.products=this._productSvc.getProductsByName(this.searchBar);
        if(this.products.length===0)
          this.isProductsEmpty=true;
        else
          this.isProductsEmpty=false;
      }catch(ex){
        this.isProductsEmpty=true;
      }
    }

    onDeleteProduct(id:number){
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#28a745',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              this._deleteSvc.deleteProduct(id).subscribe(
                res=>{
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                  )
                  window.location.reload();
                },
                err=>{
                Swal.fire(
                    'Something went wrong!',
                    'Your file has not been deleted.',
                    'error'
                  )
                });            
            }
          })
        
    }
      
}
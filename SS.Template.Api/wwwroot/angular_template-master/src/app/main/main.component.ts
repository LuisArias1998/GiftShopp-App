import { Component, OnInit } from '@angular/core';
import { NavItem } from '../common/models/nav-item.model';

import { AuthService } from '../core/services/auth.service';
import { ProductsService } from '../services/products.service';
import { IProduct } from '../interface/IProduct';
import { ErrorHandlerService } from '../core/services/error-handler.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  categoriesList:Set<String>;
  searchBar: string;
  isProductsEmpty = true;
  productsSize:number;
  isLogged:boolean = false;
  navItems: NavItem[] = [
    { name: 'examples.$TITLE', route: ['/examples'] }
  ];
  public products: IProduct[];

  constructor(private _authService: AuthService, private _productSvc: ProductsService,
              private _error: ErrorHandlerService, private _auth: AuthService) {
    if (this.products) {
      this.isProductsEmpty = false;
    } else {
      this.isProductsEmpty = true;
    }
  }

  ngOnInit(): void {
    this._productSvc.loadProducts().subscribe(
      () => {
        //Loading and setting products from the database 
        this.products = this._productSvc.products;
        this.productsSize=this.products.length;
        this.setCategoriesList();
        if (this.products && !this.products.length) {
          this.isProductsEmpty = true;
        } else {
          this.isProductsEmpty = false;
        }
        
      },
      err => this._error.handle(err))

      try{
        //trying to get the account info to see if the user is logged
        this._auth.getAuthInfo().subscribe(
          data => {
            
            this.isLogged=true;
          }, err => {
          
        });
      }catch(ex){
      }
  }
  setCategoriesList() {
    const catList: string[] = [];
    try{
      this.products.forEach((cp, index) => {
        catList[index] = cp.category;
      });
      // NON REPEATED ITEMS
      this.categoriesList = new Set(catList);
    }catch(ex){}
  }
  logOut() {
    this._authService.logOut();
  }
  filterByCategory(e: any) {
    //Getting the current cattegory from the event and filtering
    let category: string = e.target.text.replace('(current)', '');
    category = category.substring(1, category.length - 1);
    try{
      this.products = this._productSvc.getProductsByCategory(category);
    }catch(ex){

    }
  }
  listAll() {
    try{
      this.products = this._productSvc.getProducts();
      this.productsSize=this.products.length
    }catch(ex){
      this._error.handle(ex);
    }
    if (this.products) {
      this.isProductsEmpty = false;
    }
    else {
      this.isProductsEmpty = true;
    }
  }
  onSearchForProduct() {
    try {
      this.products = this._productSvc.getProductsByName(this.searchBar);
      this.productsSize=this.products.length
      if (this.products.length === 0) {
        this.isProductsEmpty = true;
      }
      else {
        this.isProductsEmpty = false;
      }
    } catch (ex) {
      this.isProductsEmpty = true;
    }

  }
  sortForQuantity(index:number){
    this.productsSize=index;
  }
}

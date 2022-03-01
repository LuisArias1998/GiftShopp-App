import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import { NavItem } from '../common/models/nav-item.model';
import { AuthService } from '../core/services/auth.service';
import { ProductsService } from '../services/products.service';
import { Router } from '@angular/router';
import { IProduct } from '../interface/IProduct';
import { UserService } from '../services/user.service';
import { NotificationService } from '../core/services/notification.service';
import { ErrorHandlerService } from '../core/services/error-handler.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  categoriesList;
  searchBar: string;
  isProductsEmpty = true;
  isLogged:boolean = false;
  navItems: NavItem[] = [
    { name: 'examples.$TITLE', route: ['/examples'] }
  ];
  public products: IProduct[];

  constructor(private _authService: AuthService, private _productSvc: ProductsService,
              private router: Router, private _notificactionSvc: NotificationService,
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
        this.products = this._productSvc.products;
        this.setCategoriesList();
        if (this.products && !this.products.length) {
          this.isProductsEmpty = true;
        } else {
          this.isProductsEmpty = false;
        }
        
      },
      err => this._error.handle(err))

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
  setCategoriesList() {
    const catList: string[] = [];
    this.products.forEach((cp, index) => {
      catList[index] = cp.category;
    });
    // NON REPEATED ITEMS
    const dataArr = new Set(catList);
    this.categoriesList = dataArr;
  }
  logOut() {
    this._authService.logOut();
  }
  filterByCategory(e: any) {
    let category: string = e.target.text.replace('(current)', '');
    category = category.substring(1, category.length - 1);

    this.products = this._productSvc.getProductsByCategory(category);
  }
  listAll() {
    this.products = this._productSvc.getProducts();
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
}

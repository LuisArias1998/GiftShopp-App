import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '../interface/IProduct';
import { Order } from '../shared/Order';
import { map } from 'rxjs/operators';
import { ICustomer } from '../interface/ICustomer';
import { IOrderItem } from '../interface/IOrderItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public products:IProduct[]=[];
  public order:Order = new Order();
  public total:number;

  public orders;

  URL:string = 'https://localhost:44383';


  public expiration = new Date();

  public customer:ICustomer[];

  constructor(private http:HttpClient) { }

  addToOrder(product: IProduct) {
    let item: IProduct;
    //If the item already exists just increment the quantity
    item = this.order.items.find(o => o.id === product.id);
    if (item) {
        item.quantity++;
    } else {
        let item :IProduct={};
        item.id = product.id;
        item.productName = product.productName;
        item.productDescription = product.productDescription;
        item.productImg = product.productImg;
        item.category = product.category;
        item.unitPrice = product.unitPrice;
        item.quantity = 1;
        this.order.items.push(item);

    }    
  }
  getOrder():Order{
    return this.order
  }
  getOrders(){
    return this.http.get(`${this.URL}/api/order`).pipe(map(
    res=>{
      this.orders=res;
      return res;
    },
    err=>{

    }
    ))
  }

  postOrder(order:Order){
    return this.http.post(`${this.URL}/api/order`,order).pipe(map(
      res=>{

      },err=>{

      }
      ));
  }
  postCustomer(customer:ICustomer){
    return this.http.post<ICustomer>(`${this.URL}/api/Customers`,customer).pipe(map(data=>{}));
  }
  getOrdersByOrderNumber(na:string){
    var temp = this.orders.filter(o=>o.orderNumber.toLowerCase().includes(na.toLowerCase()));
    return temp;
  }
}

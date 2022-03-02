import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Order } from 'src/app/shared/Order';

@Component({
    selector:'app-ordershistory',
    templateUrl:'./ordersHistory.component.html',
    styleUrls:['./ordersHistory.component.scss']
})
export class OrdersHistoryComponent implements OnInit{

    orders:Order;
    constructor(private _cartSvc:CartService){
        
    }
    ngOnInit(): void {
        this._cartSvc.getOrders().subscribe(
            res=>{
                this.orders=this._cartSvc.orders;
                console.log(this.orders)
            },err=>{

            });
    }
}
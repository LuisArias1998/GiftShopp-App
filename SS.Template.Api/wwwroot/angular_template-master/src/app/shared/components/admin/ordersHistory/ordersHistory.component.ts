import { Component, OnInit } from '@angular/core';
import { ErrorHandlerService } from 'src/app/core/services/error-handler.service';
import { CartService } from 'src/app/services/cart.service';
import { Order } from 'src/app/shared/Order';

@Component({
    selector:'app-ordershistory',
    templateUrl:'./ordersHistory.component.html',
    styleUrls:['./ordersHistory.component.scss']
})
export class OrdersHistoryComponent implements OnInit{
    searchBar:string;
    orders:Order[];
    isOrdersEmpty:boolean=true;
    constructor(private _cartSvc:CartService, private _error:ErrorHandlerService){
        
    }
    ngOnInit(): void {
        this._cartSvc.getOrders().subscribe(
            res=>{
                this.orders=this._cartSvc.orders;
                try{
                    if(this.orders.length===0){
                        this.isOrdersEmpty=true;
                    }else{
                        this.isOrdersEmpty=false;
                    }
                }catch(ex){
                    this.isOrdersEmpty=true;
                }
            },err=>{
                this._error.handle(err);
            });
    }
    onSearchForOrders(){
        try{
            this.orders=this._cartSvc.getOrdersByOrderNumber(this.searchBar);
            if(this.orders.length===0){
                this.isOrdersEmpty=true;
            }else{
                this.isOrdersEmpty=false;
            }
        }catch(ex){
            this.isOrdersEmpty=true;
        }
        
    }
}
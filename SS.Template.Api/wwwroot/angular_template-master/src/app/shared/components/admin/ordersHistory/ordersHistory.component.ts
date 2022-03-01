import { Component, OnInit } from '@angular/core';

@Component({
    selector:'app-ordershistory',
    templateUrl:'./ordersHistory.component.html',
    styleUrls:['./ordersHistory.component.scss']
})
export class OrdersHistoryComponent implements OnInit{

    orders:any;
    constructor(){
        
    }
    ngOnInit(): void {
        
    }
}
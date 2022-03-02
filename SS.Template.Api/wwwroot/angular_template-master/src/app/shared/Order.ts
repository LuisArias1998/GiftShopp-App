import { ICustomer } from '../interface/ICustomer';
import { IOrderItem } from '../interface/IOrderItem';
import { IProduct } from '../interface/IProduct';
export class Order{

    orderId:number;
    orderNumber: string = Math.random().toString(36).substring(2,5);
    items: IProduct[] = [];
    customer:ICustomer;
    get subtotal():number{
        const result = this.items.reduce(
            (tot,val)=>{
                return tot+(val.unitPrice*val.quantity);
            }, 0);
        return result;
    }
}
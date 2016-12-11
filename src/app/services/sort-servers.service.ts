import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class SortServerService{


    public arrFiends: Array<ItemOption> =[
        {
            value: "name",
            label: "Name (Alphabetical)"
        },
        {
            value: "bind",
            label: "Bind"
        },
        {
            value: "rx",
            label: "Rx"
        },
        {
            value: "tx",
            label: "Tx"
        },
        {
            value: "total",
            label: "Tx (RX + TX)"
        }
    ];

    public arrOrders: Array<ItemOption> =[
        {
            value: "+",
            label: "Low to Hight"
        },
        {
            value: "-",
            label: "Hight to low"
        }
    ];

    private state: Subject<ServersSorting>;

    constructor() {
        this.state = new Subject<ServersSorting>();
    }

    subscribe(next: any = null, error: any= null, complete: any = null){
        this.state.subscribe(next,error,complete);
    }

    next(obj: ServersSorting){
        this.state.next(obj);
    }
}
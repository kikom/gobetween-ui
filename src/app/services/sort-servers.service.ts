import { Injectable } from "@angular/core";
import { Subject, ReplaySubject } from "rxjs";
import {ItemOption, ServersSorting, StatePopup} from "../entities/ui-entities";

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

    public stateSort: ReplaySubject<ServersSorting>;
    private statePopup: Subject<StatePopup>;

    constructor() {
        this.stateSort = new ReplaySubject<ServersSorting>();
        this.statePopup = new Subject<StatePopup>();


        this.stateSort.next({
            sortBy: this.arrFiends[0],
            sortOrder: this.arrOrders[0].value
        });
    }

    subscribe(next: any = null, error: any= null, complete: any = null){
        this.stateSort.subscribe(next,error,complete);
    }

    next(obj: ServersSorting){
        this.stateSort.next(obj);
    }

    subscribePopupUpdate(next: any = null, error: any= null, complete: any = null){
        this.statePopup.subscribe(next,error,complete);
    }

    openPopup(){
        this.statePopup.next({
            opened: true
        });
    }

    closePopup(){
        this.statePopup.next({
            opened: false
        });
    }
}
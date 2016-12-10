import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class SortServerService{

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
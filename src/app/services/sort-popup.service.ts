import {Injectable} from "@angular/core";
import {Subject} from "rxjs";

@Injectable()
export class SortPopupService {

    private state: Subject<boolean> = new Subject<boolean>();

    constructor() {}

    open(){
        this.state.next(true);

        return this;
    }

    close(){
        this.state.next(false);

        return this;
    }


    subscribe(cb: any){
        this.state.subscribe(cb);

        return this;
    }

}
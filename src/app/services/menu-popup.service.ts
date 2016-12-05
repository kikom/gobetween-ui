import {Injectable} from "@angular/core";
import {Subject} from "rxjs";

@Injectable()
export class MenuPopupService {

    private menuState: Subject<boolean> = new Subject<boolean>();

    constructor() {

    }

    open(){
        this.menuState.next(true);

        return this;
    }

    close(){
        this.menuState.next(false);

        return this;
    }

    toggle(){

    }

    subscribe(cb: any){
        this.menuState.subscribe(cb);

        return this;
    }

}
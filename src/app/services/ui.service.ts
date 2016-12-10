import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class UIService extends Subject<EventUI>{

    public static MOBILE_MENU_OPEN: string = "mobile_menu_open";
    public static MOBILE_MENU_CLOSE: string = "mobile_menu_close";

    public static POPUP_SORT_CLOSE: string = "popup_sort_close";
    public static POPUP_SORT_OPEN: string = "popup_sort_open";

    constructor() {
        super()
    }
}
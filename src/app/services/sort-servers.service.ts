import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class SortServerService extends Subject<ServersSorting>{

    constructor() {
       super()
    }
}
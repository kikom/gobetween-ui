import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Backend} from "../../entities/backend";

import "./backends-table.component.scss";

@Component({
    selector: 'ui-backends-table',
    templateUrl: 'backends-table.component.html',
})
export class BackendsTableComponent {

    @Input()
    rows: { [key:string]: Backend} = {};

    @Output()

    select: EventEmitter<any> = new EventEmitter();

    constructor(){

    }

    onClick(backned: any){
        this.select.emit(backned);
    }
}
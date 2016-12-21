import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Backend} from "../entities/backend";

@Component({
    selector: 'ui-backends-table',
    templateUrl: '../templates/components/backends-table.component.html',
})
export class BackendsTableComponent {

    @Input()
    rows: { [key:string]: Backend} = {};

    @Input()
    serverId: String;

    constructor(){

    }
}
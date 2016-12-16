import { Component, Input } from '@angular/core';
import {Backend} from "../entities/backend";

@Component({
    selector: 'ui-backends-table',
    templateUrl: '../templates/components/backends-table.component.html',
})
export class BackendsTableComponent {

    @Input()
    rows: { [key:string]: Backend} = {};


    constructor(){

    }
}
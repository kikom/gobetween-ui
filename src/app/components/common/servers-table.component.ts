import { Component, Input } from '@angular/core';

import "./servers-table.component.scss";

@Component({
    selector: 'ui-servers-table',
    templateUrl: 'servers-table.component.html',
})
export class ServersTableComponent {

    @Input()
    rows: any;

    @Input()
    sortBy: string;

    @Input()
    sortOrder: string;

    constructor(){

    }
}
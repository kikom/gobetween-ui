import { Component, Input } from '@angular/core';

@Component({
    selector: 'ui-servers-table',
    templateUrl: '../templates/components/servers-table.component.html',
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
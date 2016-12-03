import { Component } from '@angular/core';

@Component({
    selector: 'ui-table',
    templateUrl: '../templates/components/table.component.html',
})
export class TableComponent {

    rows: any = [{},{},{},{},{}];

    constructor(){

    }
}
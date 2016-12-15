import { Component, Input } from '@angular/core';

@Component({
    selector: 'ui-backends-table',
    templateUrl: '../templates/components/backends-table.component.html',
})
export class BackendsTableComponent {

    @Input()
    rows: any;


    constructor(){
        this.rows = [{},{},{}];
    }
}
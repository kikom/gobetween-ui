import { Component, OnInit } from '@angular/core';
import { SortPopupService } from "../services/sort-popup.service";
import { SortServerService } from "../services/sort-servers.service";

@Component({
    selector: 'ui-sort-popup',
    templateUrl: '../templates/components/sort-popup.component.html',
})
export class SortPopupComponent implements OnInit{

    private opened: boolean = false;

    private selectedOrder: ItemOption;
    private selectedField: ItemOption;

    constructor(
        private sortPopup: SortPopupService,
        private sorting: SortServerService
    ) {}

    ngOnInit(){
        this.sortPopup.subscribe(this.sortPopupServiceSubscribe.bind(this));
    }


    sortPopupServiceSubscribe(value: boolean){
        this.opened = value;
    }

    closePopup(){
        this.sortPopup.close();
    }

    applySorting(){

        this.sorting.next({
            sortBy: this.selectedField.value,
            sortOrder: this.selectedOrder.value
        });

        this.closePopup();
    }


}
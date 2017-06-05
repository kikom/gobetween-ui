import { Component, OnInit } from '@angular/core';
import { SortServerService } from "../../services/sort-servers.service";
import {ItemOption, StatePopup} from "../../entities/ui-entities";

import "./sort-popup.component.scss";

@Component({
    selector: 'ui-sort-popup',
    templateUrl: 'sort-popup.component.html',
})
export class SortPopupComponent implements OnInit{

    private opened: boolean = false;

    private selectedOrder: ItemOption;
    private selectedField: ItemOption;

    constructor(
        private sorting: SortServerService
    ) {}

    ngOnInit(){
        this.sorting.subscribePopupUpdate(this.onSubscribePopupUpdate.bind(this));
    }

    onSubscribePopupUpdate(obj: StatePopup){
        this.opened = obj.opened;
    }

    closePopup(){
        this.sorting.closePopup();
    }

    applySorting(){

        this.sorting.next({
            sortBy: this.selectedField,
            sortOrder: this.selectedOrder.value
        });

        this.closePopup();
    }


}
import { Component, OnInit } from '@angular/core';
import { UIService } from "../services/ui.service";
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
        private ui: UIService,
        private sorting: SortServerService
    ) {}

    ngOnInit(){
        this.ui.subscribe(this.uiServiceSubscribe.bind(this));
    }


    uiServiceSubscribe(evt: EventUI){

        if(evt.name == UIService.POPUP_SORT_OPEN || evt.name == UIService.POPUP_SORT_CLOSE){
            this.opened = evt.data.opened;
        }
    }

    closePopup(){
        this.ui.next({
           name: UIService.POPUP_SORT_CLOSE,
           data: {opened: false}
        });
    }

    applySorting(){

        this.sorting.next({
            sortBy: this.selectedField,
            sortOrder: this.selectedOrder.value
        });

        this.closePopup();
    }


}
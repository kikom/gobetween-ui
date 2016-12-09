import { Component, OnInit } from '@angular/core';
import { SortPopupService } from "../services/sort-popup.service";

@Component({
    selector: 'ui-sort-popup',
    templateUrl: '../templates/components/sort-popup.component.html',
})
export class SortPopupComponent implements OnInit{

    private opened: boolean = false;

    constructor(
        private sortPopup: SortPopupService
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

}
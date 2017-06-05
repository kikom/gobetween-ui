import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import {ItemOption} from "../../entities/ui-entities";

import "./radio-buttons.component.scss";

@Component({
    selector: 'ui-radio-buttons',
    templateUrl: 'radio-buttons.component.html',
})
export class RadioButtonsComponent implements OnInit{

    @Input()
    private arrOptions: Array<ItemOption>;

    @Output()
    private onChangeSelected: EventEmitter<ItemOption> = new EventEmitter<ItemOption>();

    private selectedOption: ItemOption;

    constructor(
    ) {}

    ngOnInit(){
        this.selectOption(0);
    }

    selectOption(index: number){
        this.selectedOption = this.arrOptions[index];
        this.onChangeSelected.emit(this.selectedOption);
    }
}
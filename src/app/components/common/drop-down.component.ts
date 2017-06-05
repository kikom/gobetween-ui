import { Component, Input, Output,EventEmitter, OnInit } from '@angular/core';
import {ItemOption} from "../../entities/ui-entities";

import "./drop-down.component.scss";

@Component({
    selector: 'ui-drop-down',
    templateUrl: 'drop-down.component.html',
})
export class DropDownComponent implements OnInit{

    private opened: boolean = false;


    @Input()
    private arrOptions: Array<ItemOption>;

    @Output()
    private onChangeSelected: EventEmitter<ItemOption> = new EventEmitter<ItemOption>();

    private selectedOption: ItemOption;

    constructor(
    ) {}

    ngOnInit(){
        this.onOptionClick(0);
    }

    onOptionClick(index: number){
        this.selectedOption = this.arrOptions[index];
        this.onChangeSelected.emit(this.selectedOption);
        this.opened = false;
    }

    onSelectedOptionClick(){
        this.opened = !this.opened;
    }

    onBlur(){
        this.opened = false;
    }
}
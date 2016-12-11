import { Component, Input, Output,EventEmitter, OnInit } from '@angular/core';

@Component({
    selector: 'ui-drop-down',
    templateUrl: '../templates/components/drop-down.component.html',
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
}
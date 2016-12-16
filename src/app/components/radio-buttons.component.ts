import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
    selector: 'ui-radio-buttons',
    templateUrl: '../templates/components/radio-buttons.component.html',
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
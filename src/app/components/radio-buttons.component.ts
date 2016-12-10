import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
    selector: 'ui-radio-buttons',
    templateUrl: '../templates/components/radio-buttons.component.html',
})
export class RadioButtonsComponent implements OnInit{

    private arrOptions: Array<ItemOption>;

    @Output()
    private onChangeSelected: EventEmitter<ItemOption> = new EventEmitter<ItemOption>();

    private selectedOption: ItemOption;

    constructor(
    ) {}

    ngOnInit(){

        this.arrOptions = [
            {
                value: "name",
                label: "Name (Alphabetical)"
            },
            {
                value: "bind",
                label: "Bind"
            },
            {
                value: "rx",
                label: "Rx"
            },
            {
                value: "tx",
                label: "Tx"
            },
            {
                value: "total",
                label: "Tx (RX + TX)"
            }
        ];

        this.selectOption(0);

    }

    selectOption(index: number){
        this.selectedOption = this.arrOptions[index];
        this.onChangeSelected.emit(this.selectedOption);
    }
}
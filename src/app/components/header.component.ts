import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'ui-header',
    templateUrl: '../templates/components/header.component.html',
})
export class HeaderComponent implements OnInit{


    private opened: boolean = false;

    constructor() {}

    ngOnInit(){

    }

    openMenu(){
        this.opened = true;
    }

    closeMenu(){
        this.opened = false;
    }

}
import { Component, OnInit } from '@angular/core';
import {ApiService} from "../services/api.service";

@Component({
    selector: 'ui-header',
    templateUrl: '../templates/components/header.component.html',
})
export class HeaderComponent implements OnInit{


    private opened: boolean = false;

    constructor(
        private api: ApiService
    ) {}

    ngOnInit(){

    }

    openMenu(){
        this.opened = true;
    }

    closeMenu(){
        this.opened = false;
    }

    getDump() {
        this.closeMenu();
        this.api.getDump().then((data) => {
            let blob = new Blob([data._body], {type: 'text/plain; charset=utf-8'});
            let url = window.URL.createObjectURL(blob);
            window.open(url);
        })
    }

}
import { Component, OnInit } from '@angular/core';
import { MenuPopupService } from "../services/menu-popup.service"

@Component({
    selector: 'ui-popup-menu',
    templateUrl: '../templates/components/menu-popup.component.html',
})
export class MenuPopupComponent implements OnInit{

    private opened: boolean = false;

    constructor(
        private menuService: MenuPopupService
    ) {}

    ngOnInit(){
        this.menuService.subscribe(this.menuStateSubscribe.bind(this))
    }

    closeMenu(){
        this.menuService.close();
    }

    menuStateSubscribe(value: boolean){
        this.opened = value;
    }

}
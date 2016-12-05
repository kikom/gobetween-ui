import { Component, OnInit } from '@angular/core';

import { MenuPopupService } from "../services/menu-popup.service"

@Component({
    selector: 'ui-header',
    templateUrl: '../templates/components/header.component.html',
})
export class HeaderComponent implements OnInit{

    constructor(
        private menuService: MenuPopupService
    ) {}

    ngOnInit(){

    }

    mobileMenuOpen(){
        this.menuService.open();
    }

}
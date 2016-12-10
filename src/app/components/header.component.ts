import { Component, OnInit } from '@angular/core';

import { UIService } from "../services/ui.service"

@Component({
    selector: 'ui-header',
    templateUrl: '../templates/components/header.component.html',
})
export class HeaderComponent implements OnInit{

    constructor(
        private ui: UIService
    ) {}

    ngOnInit(){

    }

    mobileMenuOpen(){
        this.ui.next({
            name: UIService.MOBILE_MENU_OPEN,
            data: {opened: true}
        })
    }

}
import { Component, OnInit } from '@angular/core';
import { UIService } from "../services/ui.service"

@Component({
    selector: 'ui-popup-menu',
    templateUrl: '../templates/components/menu-popup.component.html',
})
export class MenuPopupComponent implements OnInit{

    private opened: boolean = false;

    constructor(
        private ui: UIService
    ) {}

    ngOnInit(){

        this.ui.subscribe(this.subscribeOnUiEvent.bind(this))
    }

    closeMenu(){

        this.ui.next({
            name: UIService.MOBILE_MENU_CLOSE,
            data: {open: false}
        });
    }

    subscribeOnUiEvent(evt: EventUI){

        if(evt.name == UIService.MOBILE_MENU_OPEN || evt.name == UIService.MOBILE_MENU_CLOSE){
            this.opened = evt.data.opened;
        }
    }

}
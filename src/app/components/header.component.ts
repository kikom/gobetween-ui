import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ApiService} from "../services/api.service";

import "./header.component.scss";

@Component({
    selector: 'ui-header',
    templateUrl: 'header.component.html',
})
export class HeaderComponent implements OnInit{

    private opened: boolean = false;

    constructor(
        private api: ApiService,
        private router: Router
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

            var link = document.createElement("a");
            link.href = url;
            link.target = "blank";

            link.click();
        })
    }

    logout(){
        this.closeMenu();
        sessionStorage.removeItem("user");
        this.router.navigate(['/login']);
    }

}
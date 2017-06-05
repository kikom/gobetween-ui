import {Component} from "@angular/core";
import {ApiService} from "../../services/api.service";

import "./about.component.scss";

@Component({
    selector: 'page-about',
    templateUrl: 'about.component.html'
})


export class AboutComponent {

    constructor(
        private api: ApiService
    ) {}

    info: Object = {};

    ngOnInit() {
        this.api.getInfo().subscribe(info => {
            this.info = info;
        })
    }

}
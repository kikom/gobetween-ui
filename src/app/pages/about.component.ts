import {Component} from "@angular/core";
import {ApiService} from "../services/api.service";

@Component({
    selector: 'page-about',
    templateUrl: '../templates/pages/about.component.html'
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
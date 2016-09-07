import {Component} from "@angular/core";
import {ApiService} from "./services/api.service";

@Component({
    selector: 'lb-info',
    templateUrl: 'templates/info.component.html'
})


export class InfoComponent {

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
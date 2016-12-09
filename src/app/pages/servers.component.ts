import { Component } from "@angular/core";
import { ApiService } from "../services/api.service";
import { SortPopupService } from "../services/sort-popup.service";

@Component({
    selector: 'page-servers',
    templateUrl: '../templates/pages/servers.component.html'
})

export class ServersComponent {

    constructor(
        private api: ApiService,
        private sortPopup: SortPopupService
    ) {}

    servers: { [key:string]: Server} = {};

    sortBy: string = 'name';
    sortOrder: string = '-';


    ngOnInit() {
        this.api.getServers().subscribe((servers) => {
            console.log(servers);
            this.servers = servers;
        })
    }

    onClickSort(){
        this.sortPopup.open();
    }

}
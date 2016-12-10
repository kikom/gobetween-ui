import { Component } from "@angular/core";
import { ApiService } from "../services/api.service";
import { SortPopupService } from "../services/sort-popup.service";
import { SortServerService } from "../services/sort-servers.service";

@Component({
    selector: 'page-servers',
    templateUrl: '../templates/pages/servers.component.html'
})

export class ServersComponent {

    constructor(
        private api: ApiService,
        private sortPopup: SortPopupService,
        private sorting: SortServerService
    ) {}

    servers: { [key:string]: Server} = {};

    serverSorting: ServersSorting = {
        sortBy: {
            value: "name",
            label: "Name (Alphabetical)"
        },
        sortOrder: "+"
    };


    ngOnInit() {
        this.api.getServers().subscribe((servers) => {
            console.log(servers);
            this.servers = servers;
        });

        this.sorting.subscribe((sort: ServersSorting)=>{
            this.serverSorting = sort;
        });
    }

    onClickSort(){
        this.sortPopup.open();
    }

}
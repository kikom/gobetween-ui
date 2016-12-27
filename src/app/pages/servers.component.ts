import {Component, ChangeDetectorRef} from "@angular/core";
import { SortServerService } from "../services/sort-servers.service";
import {ServersService} from "../services/servers.service";
import {Server} from "../entities/server";

@Component({
    selector: 'page-servers',
    templateUrl: '../templates/pages/servers.component.html'
})

export class ServersComponent {

    constructor(
        private serversService: ServersService,
        private sorting: SortServerService
    ) {}

    servers: { [key:string]: Server} = {};

    serverSorting: ServersSorting;

    ngOnInit() {

        this.servers = this.serversService.servers;

        this.serversService.subscribe(() => {
            console.log('refreshed!');

            console.log(this.servers);
            //TODO refresh component when servers refreshed
        });

        this.sorting.subscribe((sort: ServersSorting) => {
            this.serverSorting = sort;
        });
    };

    onClickSort(){
        this.sorting.openPopup();
    }

}
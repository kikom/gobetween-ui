import {Component, ChangeDetectorRef} from "@angular/core";
import { UIService } from "../services/ui.service";
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
        private ui: UIService,
        private sorting: SortServerService
    ) {}

    servers: { [key:string]: Server} = {};

    serverSorting: ServersSorting;

    ngOnInit() {

        this.servers = this.serversService.servers;

        this.serversService.subscribe(() => {
            console.log('refreshed!');
            //TODO refresh component when servers refreshed

        this.serverSorting = {
            sortBy: this.sorting.arrFiends[0],
            sortOrder: this.sorting.arrOrders[0].value
        };

        //console.log(this.servers);

        this.sorting.subscribe((sort: ServersSorting) => {
            this.serverSorting = sort;
        });
    }

    onClickSort(){
        this.ui.next({
            name: UIService.POPUP_SORT_OPEN,
            data: {opened : true}
        });
    }

}
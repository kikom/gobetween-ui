import {Component, OnInit, OnDestroy} from "@angular/core";
import { SortServerService } from "../services/sort-servers.service";
import {ServersService} from "../services/servers.service";
import {Server} from "../entities/server";
import {Subscription} from "rxjs";

@Component({
    selector: 'page-servers',
    templateUrl: '../templates/pages/servers.component.html'
})

export class ServersComponent implements OnInit, OnDestroy{

    ready: boolean;

    constructor(
        private serversService: ServersService,
        private sorting: SortServerService
    ) {}

    servers: { [key:string]: Server} = {};

    serverSorting: ServersSorting;

    serversSubscription: Subscription;

    ngOnInit() {

        this.servers = this.serversService.servers;

        this.serversSubscription = this.serversService
            .delay(400)
            .subscribe(() => {
                console.log('refreshed!');
                this.ready = true;
            });

        this.sorting.subscribe((sort: ServersSorting) => {
            this.serverSorting = sort;
        });
    };

    ngOnDestroy(){
        this.serversSubscription.unsubscribe();
    }

    onClickSort(){
        this.sorting.openPopup();
    }

}
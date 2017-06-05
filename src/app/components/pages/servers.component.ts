import {Component, OnInit, OnDestroy} from "@angular/core";
import {Subscription} from "rxjs";
import * as _ from "lodash";
import {ServersService} from "../../services/servers.service";
import {SortServerService} from "../../services/sort-servers.service";
import {Server} from "../../entities/server";
import {ServersSorting} from "../../entities/ui-entities";

import "./servers.component.scss";

@Component({
    selector: 'page-servers',
    templateUrl: 'servers.component.html'
})

export class ServersComponent implements OnInit, OnDestroy{

    servers: { [key:string]: Server} = {};
    serverSorting: ServersSorting;
    serversSubscription: Subscription;
    ready: boolean;

    constructor(
        private serversService: ServersService,
        private sorting: SortServerService
    ) {}

    ngOnInit() {

        this.servers = this.serversService.servers;

        this.serversSubscription = this.serversService
            .subscribe(() => {
                console.log('refreshed!');

                if(_.size(this.servers)) this.ready = true;
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
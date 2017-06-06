import {Component, OnDestroy, OnInit} from "@angular/core";
import {Router, ActivatedRoute, Params} from "@angular/router";
import * as _ from "lodash";
import {Observable, Subscription} from "rxjs";
import {Server} from "../../entities/server";
import {ServersService} from "../../services/servers.service";

import "./server-detail.component.scss";

@Component({
    selector: 'page-server-detail',
    templateUrl: 'server-detail.component.html'
})

export class ServerDetailComponent implements OnInit, OnDestroy{

    private serverId: string;
    private server: Server;

    private subs: Subscription;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private serversService: ServersService,
    ) {}

    ngOnInit() {

        this.server = null;

        this.subs = this.route.params
            .flatMap((params: Params)=>{
                return Observable.combineLatest(
                    Observable.of(params['server-id']),
                    this.serversService
                )
            })
            .filter(()=> {
                return this.serversService.fetched
            })
            .subscribe((data: any)=>{
                this.serverId = data[0];

                let server = this.serversService.getServer(this.serverId);
                if(server){
                    this.server = server;
                }else{
                    this.router.navigate(['../']);
                }
            });
    }

    ngOnDestroy(){
        this.subs.unsubscribe();
    }

    deleteServer(id: string) {
        this.serversService.deleteServer(id);
        this.router.navigate(['../'])
    }

    onSelectBackend(backend: any){
        console.log(backend);
    }

}
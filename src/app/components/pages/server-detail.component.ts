import {Component, OnDestroy, OnInit} from "@angular/core";
import {Router, ActivatedRoute, Params} from "@angular/router";
import * as _ from "lodash";
import {Observable} from "rxjs";
import {Server} from "../../entities/server";
import {ServersService} from "../../services/servers.service";

import "./server-detail.component.scss";
import {Subscription} from "rxjs/Subscription";

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

                console.log(this.serversService.fetched);
                this.serverId = data[0];

                if(this.serversService.getServer(this.serverId)){
                    this.setServer()
                }else{
                    this.router.navigate(['../']);
                }
            });
    }

    ngOnDestroy(){
        this.subs.unsubscribe();
    }

    setServer(){
        this.server = this.serversService.getServer(this.serverId);
    }

    deleteServer(id: string) {
        this.serversService.deleteServer(id);
        this.router.navigate(['../'])
    }

}
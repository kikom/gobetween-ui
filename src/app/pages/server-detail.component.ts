import { Component, OnInit } from "@angular/core";
import * as _ from "lodash";
import {Router, ActivatedRoute, Params} from "@angular/router";
import { ServersService } from "../services/servers.service";
import {Server} from "../entities/server";
import {Backend} from "../entities/backend";
import {Observable} from "rxjs/Observable";

@Component({
    selector: 'page-servers',
    templateUrl: '../templates/pages/server-detail.component.html'
})

export class ServerDetailComponent implements OnInit{


    private serverId: string;
    private server: Server;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private serversService: ServersService,
    ) {}

    ngOnInit() {

        this.server = null;

        this.route.params
            .flatMap((params: Params)=>{
                return Observable.combineLatest(
                    Observable.of(params['server-id']),
                    this.serversService
                )
            })
            .delay(400)
            .subscribe((data: any)=>{

                this.serverId = data[0];

                if(this.serversService.getServer(this.serverId)){
                    this.setServer()
                }else{
                    this.router.navigate(['../']);
                }
            });
    }

    setServer(){
        this.server = this.serversService.getServer(this.serverId);
    }

    deleteServer(id: string) {
        this.serversService.deleteServer(id);
        this.router.navigate(['../'])
    }

}
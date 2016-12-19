import { Component } from "@angular/core";
import * as _ from "lodash";
import { Router, ActivatedRoute } from "@angular/router";
import { ServersService } from "../services/servers.service";
import {Server} from "../entities/server";

@Component({
    selector: 'page-servers',
    templateUrl: '../templates/pages/server-detail.component.html'
})

export class ServerDetailComponent {


    private serverId: string;
    private server: Server;

    constructor(
        private route: ActivatedRoute,
        private serversService: ServersService,
    ) {}

    ngOnInit() {

        this.server = null;

        this.route.params.subscribe((data: any)=>{
            if(data['server-id']) {
                this.serverId = data['server-id'];
                this.setServer();
            }
        });


        this.serversService.subscribe(() => {
            if(this.serverId){
                this.setServer()
            }
        });
    }

    setServer(){
        this.server = this.serversService.servers[this.serverId];
        console.log(this.server);
    }

}
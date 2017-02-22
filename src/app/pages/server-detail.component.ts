import { Component, OnInit } from "@angular/core";
import * as _ from "lodash";
import { Router, ActivatedRoute } from "@angular/router";
import { ServersService } from "../services/servers.service";
import {Server} from "../entities/server";
import {Backend} from "../entities/backend";

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
    }

    deleteServer(id: string) {
        this.serversService.deleteServer(id);
        this.router.navigate(['../'])
    }

}
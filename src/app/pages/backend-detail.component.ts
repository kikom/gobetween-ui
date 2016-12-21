import { Component } from "@angular/core";
import * as _ from "lodash";
import { Router, ActivatedRoute } from "@angular/router";
import { ServersService } from "../services/servers.service";
import {Server} from "../entities/server";
import {Backend} from "../entities/backend";

@Component({
    selector: 'page-servers',
    templateUrl: '../templates/pages/backend-detail.component.html'
})

export class BackendDetailComponent {


    private serverId: string;
    private backendId: string;
    private server: Server;
    private backend: Backend;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private serversService: ServersService,
    ) {}

    ngOnInit() {

        this.server = null;

        this.route.params.subscribe((data: any)=>{
            if(data['server-id'] && data['backend-id']) {
                this.serverId = data['server-id'];
                this.backendId = data['backend-id'];
                this.setBackend();
            }
        });


        this.serversService.subscribe(() => {
            if(this.serverId && this.backendId){
                this.setBackend()
            }
        });
    }

    setBackend(){

        if(this.serversService.getServer(this.serverId)){

            this.server = this.serversService.getServer(this.serverId);

            if(this.server.getBackend(this.backendId)){

                this.backend = this.serversService.getServer(this.serverId).getBackend(this.backendId);
            }
        }

    }

}
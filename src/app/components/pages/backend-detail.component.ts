import { Component } from "@angular/core";
import * as _ from "lodash";
import { Router, ActivatedRoute } from "@angular/router";
import {ServersService} from "../../services/servers.service";
import {Backend} from "../../entities/backend";
import {Server} from "../../entities/server";

@Component({
    selector: 'backend-detail',
    templateUrl: 'backend-detail.component.html'
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

        let server = this.serversService.getServer(this.serverId);
        if(server){
            this.server = server;
            let backend = this.server.getBackend(this.backendId);

            if(backend){
                this.backend = backend;
                console.log(backend.stats);
            }
        }

    }

}
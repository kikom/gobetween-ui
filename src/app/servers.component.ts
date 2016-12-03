import {Component} from "@angular/core";
import {ApiService} from "./services/api.service";

@Component({
    selector: 'page-servers',
    templateUrl: 'templates/servers.component.html'
})

export class ServersComponent {

    constructor(
        private api: ApiService
    ) {}

    servers: { [key:string]: Server} = {};

    sortBy: string = 'total';
    sortOrder: string = '+';


    ngOnInit() {
        this.api.getServers().subscribe((servers) => {
            console.log(servers);
            this.servers = servers;
        })
    }

}
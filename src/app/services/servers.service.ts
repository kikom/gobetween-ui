import {Injectable} from "@angular/core";
import "rxjs/add/observable/interval";
import * as _ from "lodash";
import {ApiService} from "./api.service";
import {Server} from "../entities/server";
import {Subject} from "rxjs";


@Injectable()
export class ServersService extends Subject<any> {

    public servers: {[key:string]: Server} = {};

    constructor(
        private api: ApiService
    ) {
        super();

        api.getServers().subscribe((serversData) => {

            //remove absent servers
            _.each(this.servers, (server, name) => {
                if (!serversData[name]) {
                    delete this.servers[name];
                }
            });

            //create or update servers
            _.each(serversData, (s, name) => {
                if (this.servers[name]) {
                    this.servers[name].update(s);
                } else {
                    this.servers[name] = new Server(s);
                }

                api.getServerStats(name).then((stats) => {
                    this.servers[name].updateStats(stats);
                })
            });

            this.next();
        })
    }

    getServer(serverName: string): Server {
        return this.servers[serverName];
    }

    deleteServer(serverName: string): void {
        this.api.deleteServer(serverName).then(() => {
            delete this.servers[serverName];
        })
    }
}
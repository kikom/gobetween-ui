
import { Injectable } from '@angular/core';
import { Router, Route, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {ServersService} from "../services/servers.service";

@Injectable()
export class FetchGuard implements CanActivate {
    constructor(private router:Router, private servers: ServersService) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        this.servers.init();
        return true;
    }
}
import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Rx";
import "rxjs/add/observable/interval";
import * as _ from "lodash";
var async = require("async");


@Injectable()
export class ApiService {

    constructor(
        private http: Http
    ) {}

    private interval: number = process.env.config.refreshIntervalMs;

    private apiUrl: string = process.env.config.gobetweenApiUrl;


    /**
     * Get general info
     */
    getInfo(): Observable<any> {
        return this.http.get(this.apiUrl + '/')
            .map(r => r.json())
            .catch(err => this.handleError(err))
    }

    /**
     * Get config dump
     */
    getDump(): Observable<any> {
        return this.http.get(this.apiUrl + '/dump')
            .map(r => r.json())
            .catch(err => this.handleError(err))
    }

    /**
     * Get info about all servers
     */
    getServers(): Observable<{[name:string]: any}> {
        return Observable
            .timer(0, this.interval)
            .flatMap(() => this.http.get(this.apiUrl + '/servers'))
            .map(r => <{[name:string]: any}> r.json())
            .catch(err => this.handleError(err));
    }

    /**
     * Get info about specific server
     */
    getServerByName(name: string): Observable<any> {
        return this.http.get(this.apiUrl + '/servers/' + name)
            .map(r => r.json())
            .catch(err => this.handleError(err))
    }

    /**
     * Get stats of specific server
     */
    getServerStats(name: string): Promise<any> {
        return this.http.get(this.apiUrl + '/servers/' + name + '/stats')
            .map(r => r.json())
            .toPromise()
    }


    /**
     * Create server
     */
    createServer(name: string, settings: Object): Observable<any> {
        return this.http.post(this.apiUrl + '/servers/' + name, settings)
            .map(r => r.json())
            .catch(err => this.handleError(err))
    }

    /**
     * Delete server by name
     */
    deleteServer(name: string): Observable<any> {
        return this.http.delete(this.apiUrl + '/servers' + name)
            .map(r => r.json())
            .catch(err => this.handleError(err))
    }


    /**
     * Handle errors
     */
    private handleError(err: Response): Observable<any> {
        return Observable.throw(err || 'Server error');
    }

}
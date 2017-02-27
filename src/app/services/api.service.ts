import {Injectable} from "@angular/core";
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from "rxjs/Rx";
import "rxjs/add/observable/interval";
import * as _ from "lodash";
import {Router} from "@angular/router";
var async = require("async");


@Injectable()
export class ApiService {

    private interval: number = process.env.config.refreshIntervalMs;

    private apiUrl: string = process.env.config.gobetweenApiUrl;


    constructor(
        private http: Http,
        private router: Router
    ) {}

    /**
     * Get general info
     */
    getInfo(headers: Headers = null): Observable<any> {

        return this.http.get(this.apiUrl + '/', { headers: headers? headers: this.getHeaders()} )
            .map(r => r.json())
            .catch(err => this.handleError(err))
    }

    /**
     * Get config dump
     */
    getDump(): Promise<any> {
        return this.http.get(this.apiUrl + '/dump', {headers: this.getHeaders()})
            .catch(err => this.handleError(err))
            .toPromise()
    }

    /**
     * Get info about all servers
     */
    getServers(): Observable<{[name:string]: any}> {
        return Observable
            .timer(0, this.interval)
            .flatMap(() => this.http.get(this.apiUrl + '/servers', {headers: this.getHeaders()}))
            .map(r => <{[name:string]: any}> r.json())
            .catch(err => this.handleError(err));
    }

    /**
     * Get info about specific server
     */
    getServerByName(name: string): Observable<any> {
        return this.http.get(this.apiUrl + '/servers/' + name, {headers: this.getHeaders()})
            .map(r => r.json())
            .catch(err => this.handleError(err))
    }

    /**
     * Get stats of specific server
     */
    getServerStats(name: string): Promise<any> {
        return this.http.get(this.apiUrl + '/servers/' + name + '/stats', {headers: this.getHeaders()})
            .map(r => r.json())
            .toPromise()
    }


    /**
     * Create server
     */
    createServer(name: string, settings: Object): Observable<any> {
        return this.http.post(this.apiUrl + '/servers/' + name, settings, {headers: this.getHeaders()})
            .map(r => r.json())
            .catch(err => this.handleError(err))
    }

    /**
     * Delete server by name
     */
    deleteServer(name: string): Promise<any> {
        return this.http.delete(this.apiUrl + '/servers/' + name, {headers: this.getHeaders()})
            .map(r => r.json())
            .catch(err => this.handleError(err))
            .toPromise()
    }


    getHeaders(){
        let user = JSON.parse(localStorage.getItem("user"));
        let headers: Headers = new Headers();

        if(user) headers.append('Authorization', "Basic " + btoa(user["login"] + ":" + user["password"]));

        return headers;

    }

    /**
     * Handle errors
     */
    private handleError(err: Response): Observable<any> {

        if(err.status == 401){
            this.router.navigate(["/login"]);
        }

        return Observable.throw(err || 'Server error');
    }

}
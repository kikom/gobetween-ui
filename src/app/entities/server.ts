import * as _ from "lodash";
import {Backend} from "./backend";

/**
 * Server class
 */
export class Server {

    settings: {
        backendConnectionTimeout: string;
        backendIdleTimeout: string;
        balance: string;
        bind: string;
        clientIdleTimeout: string;
        maxConnections: number;
        protocol: string;
        access: {
            default: string;
            rules: string[];
        };
    };

    backends: {[key:string]: Backend} = {};

    _stats: ServerStats[] = [];

    discovery?: Discovery;
    healthcheck?: Healthcheck;

    /**
     * Construct server
     * @param data
     */
    constructor(public data: any) {
        this.update(data);
    }

    /**
     * Update server
     * @param data
     */
    update(data: any): void {
        this.settings = {
            backendConnectionTimeout: data.backend_connection_timeout || null,
            backendIdleTimeout: data.backend_idle_timeout || null,
            balance: data.balance || null,
            bind: data.bind || null,
            clientIdleTimeout: data.client_idle_timeout || null,
            maxConnections: data.max_connections || null,
            protocol: data.protocol || null,
            access: data.access || null
        };

        if (data.discovery) {
            this.discovery = data.discovery;
        }

        if (data.healthcheck) {
            this.healthcheck = data.healthcheck
        }
    }

    /**
     * Update server stats and backends
     * @param stats
     */
    public updateStats(stats: any): void {
        this._stats.push({
            activeConnections: stats.active_connections,
            rxTotal: stats.rx_total,
            txTotal: stats.tx_total,
            rxSecond: stats.rx_second,
            txSecond: stats.tx_second
        });

        if (stats.backends) {
            this.updateBackends(stats.backends);
        }
    }

    /**
     * Getter of current stats
     * @returns {T}
     */
    get stats(): ServerStats {
        return _.last(this._stats);
    }

    /**
     * Get stats trend
     * @param direction
     * @returns {number}
     */
    public getStatsTrend(direction: string): number {
        let last = this.stats,
            penult = this._stats[this._stats.length - 2];

        if (!last || !penult) {
            return 0;
        }

        if (last[direction + 'Second'] > penult[direction + 'Second']) {
            return 1;
        }
        if(last[direction + 'Second'] < penult[direction + 'Second']) {
            return -1;
        }

        return 0;
    }

    /**
     * Get all stats
     * @returns {ServerStats[]}
     */
    public getStatsHistory(): ServerStats[] {
        return this._stats;
    }


    /**
     * Get backend by name
     * @returns {Backend}
     */

    public getBackend(name: string):Backend{
        return this.backends[name];
    }

    /**
     * Update backends
     * @param data
     */
    private updateBackends(data:any): void {

        //remove absent backends from server
        _.each(this.backends, (backend: any, name: string ) => {
            if (!_.find(data, {host: name.split('_')[0], port: name.split('_')[1]})) {
                delete this.backends[name];
            }
        });

        // create or update backends
        data.forEach((backend: any) => {
            let backendName = backend.host + '_' + backend.port;

            if (this.backends[backendName]) {
                this.backends[backendName].update(backend);
            } else {
                this.backends[backendName] = new Backend(backend);
            }
        })
    }
}

interface ServerStats {
    activeConnections: number,
    rxTotal: number,
    txTotal: number,
    rxSecond: number,
    txSecond: number
}

interface Healthcheck {
    fails: number,
    interval: string,
    kind: string,
    passes: number,
    timeout: string
}

interface Discovery {
    failpolicy: string,
    interval: string,
    kind: string,
    timeout: string
}
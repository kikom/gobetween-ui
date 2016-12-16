import _ = require("lodash");

/**
 * Backend class
 */
export class Backend {

    public settings: {
        host: string,
        port: string,
        priority: number,
        weight: number
    };

    private _stats: BackendStats[] = [];

    /**
     * Construct backend
     * @param data
     */
    constructor(public data: any) {
        this.update(data)
    }

    /**
     * Update backend
     * @param data
     */
    update(data: any) {
        this.settings = {
            host: data.host,
            port: data.port,
            priority: data.priority,
            weight: data.priority
        };

        if (data.stats) {
            this.updateStats(data.stats);
        }
    };

    /**
     * Update backend's stats
     * @param data
     */
    updateStats(data: any) {
        this._stats.push({
            live: data.live,
            totalConnections: data.total_connections,
            activeConnection: data.active_connections,
            refusedConnections: data.refused_connections,
            rx: data.rx,
            tx: data.tx,
            rxSecond: data.rx_second,
            txSecond: data.tx_second
        })
    }

    /**
     * Getter of current stats
     * @returns {T}
     */
    get stats() {
        return _.last(this._stats);
    }

    /**
     * Get stats trend
     * @returns {number}
     */
    getStatsTrend() {
        let last = this.stats,
            penult = this._stats[this._stats.length - 2];

        if (last.txSecond > penult.txSecond) {
            return 1
        }
        if(last.txSecond < penult.txSecond) {
            return -1
        }
    }

    /**
     * Get all stats
     * @returns {BackendStats[]}
     */
    getStatsHistory() {
        return this._stats;
    }
}


interface BackendStats {
    live: boolean,
    totalConnections: number,
    activeConnection: number,
    refusedConnections: number,
    rx: number,
    tx: number,
    rxSecond: number,
    txSecond: number
}
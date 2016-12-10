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

interface BackendStats {
    live: boolean,
    total_connections: number,
    active_connection: number,
    refused_connections: number,
    rx: number,
    tx: number,
    rx_second: number,
    tx_second: number
}

interface Backend {
    host: string,
    port: string,
    priority: number,
    weight: number,
    stats: BackendStats[]
}

interface ServerStats {
    active_connections: number,
    rx_total: number,
    tx_total: number,
    rx_second: number,
    tx_second: number,
    backends?: Backend[]
}

interface Server {
    backend_connection_timeout: string,
    backend_idle_timeout: string,
    balance: string,
    bind: string,
    client_idle_timeout: string,
    discovery?: Discovery,
    healthcheck?: Healthcheck,
    max_connections: number,
    protocol: string,
    stats?: ServerStats
}

interface ItemOption{
    value: string,
    label: string;
}

interface ServersSorting{
    sortBy?: ItemOption,
    sortOrder: string;
}

interface EventUI{
    name: string,
    data: any
}
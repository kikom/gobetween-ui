import {NgModule} from "@angular/core";
import {BrowserModule}  from "@angular/platform-browser";

import {MapToIterablePipe} from "./pipes/map-to-iterable.pipe";
import {SortPipe} from "./pipes/sort.pipe";
import {StatsPipe} from "./pipes/stats.pipe";


import {ApiService} from "./services/api.service";
import {ServersService} from "./services/servers.service";
import {SortServerService} from "./services/sort-servers.service";

import {FetchGuard} from "./guards/fetch.quard"


@NgModule({
    imports: [
        BrowserModule,
    ],
    declarations: [
        MapToIterablePipe,
        SortPipe,
        StatsPipe
    ],
    exports: [
        MapToIterablePipe,
        SortPipe,
        StatsPipe
    ],
    providers:[
        ApiService,
        ServersService,
        SortServerService,
        FetchGuard
    ]
})
export class CommonModule { }

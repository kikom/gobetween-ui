import {NgModule} from "@angular/core";
import {BrowserModule}  from "@angular/platform-browser";

import {MapToIterablePipe} from "./pipes/map-to-iterable.pipe";
import {SortPipe} from "./pipes/sort.pipe";
import {StatsPipe} from "./pipes/stats.pipe";


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
    ]
})
export class CommonModule { }

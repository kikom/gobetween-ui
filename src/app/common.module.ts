import {NgModule} from "@angular/core";
import {BrowserModule}  from "@angular/platform-browser";

import {MapToIterablePipe} from "./pipes/map-to-iterable.pipe";
import {SortPipe} from "./pipes/sort.pipe";


@NgModule({
    imports: [
        BrowserModule,
    ],
    declarations: [
        MapToIterablePipe,
        SortPipe
    ],
    exports: [
        MapToIterablePipe,
        SortPipe
    ]
})
export class CommonModule { }

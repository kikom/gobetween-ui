import {NgModule} from "@angular/core";
import {BrowserModule}  from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {InfoComponent} from "./info.component";
import {AboutComponent} from "./about.component";
import {ApiService} from "./services/api.service";
import {HttpModule} from "@angular/http";
import {routing} from "./app.routing";
import {ServersComponent} from "./servers.component";
import {MapToIterablePipe} from "./pipes/map-to-iterable.pipe";
import {SortPipe} from "./pipes/sort.pipe";

import {ComponentsModule} from "./components/components.module";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        routing,
        ComponentsModule
    ],
    providers: [ApiService],
    declarations: [
        AppComponent,
        InfoComponent,
        AboutComponent,
        ServersComponent,
        MapToIterablePipe,
        SortPipe
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

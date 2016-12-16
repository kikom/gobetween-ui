import {NgModule} from "@angular/core";
import {BrowserModule}  from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {ApiService} from "./services/api.service";
import {HttpModule} from "@angular/http";
import {routing} from "./app.routing";

import {InfoComponent} from "./pages/info.component";
import {AboutComponent} from "./pages/about.component";
import {ServersComponent} from "./pages/servers.component";
import {ServerDetailComponent} from "./pages/server-detail.component";


import {CommonModule} from "./common.module";
import {ComponentsModule} from "./components.module";
import {ServersService} from "./services/servers.service";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        routing,
        ComponentsModule,
        CommonModule
    ],
    providers: [ApiService, ServersService],
    declarations: [
        AppComponent,
        InfoComponent,
        AboutComponent,
        ServersComponent,
        ServerDetailComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

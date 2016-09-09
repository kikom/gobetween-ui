import {NgModule} from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {InfoComponent} from "./info.component";
import {ApiService} from "./services/api.service";
import {HttpModule} from "@angular/http";
import {routing} from "./app.routing";
import {ServersComponent} from "./servers.component";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        routing
    ],
    providers: [ApiService],
    declarations: [
        AppComponent,
        InfoComponent,
        ServersComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
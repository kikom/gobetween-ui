import {NgModule} from "@angular/core";
import {BrowserModule}  from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";

import {routing} from "./app.routing";

import {AppComponent} from "./components/app.component";
import {AppLayoutComponent} from "./components/app-layout.component";

import {LoginComponent} from "./components/pages/login.component";
import {AboutComponent} from "./components/pages/about.component";
import {ServersComponent} from "./components/pages/servers.component";
import {ServerDetailComponent} from "./components/pages/server-detail.component";
import {BackendDetailComponent} from "./components/pages/backend-detail.component";

import {CommonModule} from "./common.module";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        routing,
        CommonModule
    ],
    declarations: [
        AppComponent,
        AppLayoutComponent,
        LoginComponent,
        AboutComponent,
        ServersComponent,
        ServerDetailComponent,
        BackendDetailComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

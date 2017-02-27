import {NgModule} from "@angular/core";
import {BrowserModule}  from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";

import {routing} from "./app.routing";

import {AppComponent} from "./app.component";
import {AppLayoutComponent} from "./components/app-layout.component";

import {LoginComponent} from "./pages/login.component";
import {AboutComponent} from "./pages/about.component";
import {ServersComponent} from "./pages/servers.component";
import {ServerDetailComponent} from "./pages/server-detail.component";
import {BackendDetailComponent} from "./pages/backend-detail.component";


import {CommonModule} from "./common.module";
import {ComponentsModule} from "./components.module";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        routing,
        ComponentsModule,
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

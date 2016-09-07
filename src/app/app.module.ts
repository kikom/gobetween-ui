import {NgModule} from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {InfoComponent} from "./info.component";
import {ApiService} from "./services/api.service";
import {HttpModule} from "@angular/http";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule
    ],
    providers: [ApiService],
    declarations: [
        AppComponent,
        InfoComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
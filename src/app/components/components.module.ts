import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CommonModule } from "../common.module";

import { MenuPopupService} from "../services/menu-popup.service";

import { ServersTableComponent } from "./servers-table.component";
import { HeaderComponent } from "./header.component";
import { MenuPopupComponent } from "./menu-popup.component";


@NgModule({
    imports: [
        BrowserModule,
        RouterModule,
        CommonModule
    ],
    declarations: [
        ServersTableComponent,
        HeaderComponent,
        MenuPopupComponent
    ],
    providers: [
        MenuPopupService
    ],
    exports: [
        ServersTableComponent,
        HeaderComponent,
        MenuPopupComponent
    ]
})

export class ComponentsModule { }
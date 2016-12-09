import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CommonModule } from "./common.module";

import { MenuPopupService} from "./services/menu-popup.service";
import { SortPopupService } from "./services/sort-popup.service";

import { ServersTableComponent } from "./components/servers-table.component";
import { HeaderComponent } from "./components/header.component";
import { MenuPopupComponent } from "./components/menu-popup.component";
import { SortPopupComponent } from "./components/sort-popup.component";


@NgModule({
    imports: [
        BrowserModule,
        RouterModule,
        CommonModule
    ],
    declarations: [
        ServersTableComponent,
        HeaderComponent,
        MenuPopupComponent,
        SortPopupComponent
    ],
    providers: [
        MenuPopupService,
        SortPopupService
    ],
    exports: [
        ServersTableComponent,
        HeaderComponent,
        MenuPopupComponent,
        SortPopupComponent
    ]
})

export class ComponentsModule { }
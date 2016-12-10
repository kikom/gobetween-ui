import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CommonModule } from "./common.module";

import { UIService } from "./services/ui.service";
import { SortServerService } from "./services/sort-servers.service";

import { ServersTableComponent } from "./components/servers-table.component";
import { HeaderComponent } from "./components/header.component";
import { MenuPopupComponent } from "./components/menu-popup.component";
import { SortPopupComponent } from "./components/sort-popup.component";
import { DropDownComponent } from './components/drop-down.component';
import { RadioButtonsComponent } from './components/radio-buttons.component';


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
        SortPopupComponent,
        DropDownComponent,
        RadioButtonsComponent
    ],
    providers: [
        UIService,
        SortServerService
    ],
    exports: [
        ServersTableComponent,
        HeaderComponent,
        MenuPopupComponent,
        SortPopupComponent,
        DropDownComponent,
        RadioButtonsComponent
    ]
})

export class ComponentsModule { }
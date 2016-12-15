import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CommonModule } from "./common.module";

import { SortServerService } from "./services/sort-servers.service";

import { ServersTableComponent } from "./components/servers-table.component";
import { BackendsTableComponent } from "./components/backends-table.component";
import { HeaderComponent } from "./components/header.component";
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
        BackendsTableComponent,
        HeaderComponent,
        SortPopupComponent,
        DropDownComponent,
        RadioButtonsComponent
    ],
    providers: [
        SortServerService
    ],
    exports: [
        ServersTableComponent,
        HeaderComponent,
        SortPopupComponent,
        DropDownComponent,
        RadioButtonsComponent,
        BackendsTableComponent
    ]
})

export class ComponentsModule { }
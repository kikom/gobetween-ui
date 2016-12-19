import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CommonModule } from "./common.module";
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { SortServerService } from "./services/sort-servers.service";

import { ServersTableComponent } from "./components/servers-table.component";
import { BackendsTableComponent } from "./components/backends-table.component";
import { HeaderComponent } from "./components/header.component";
import { SortPopupComponent } from "./components/sort-popup.component";
import { DropDownComponent } from './components/drop-down.component';
import { RadioButtonsComponent } from './components/radio-buttons.component';
import { ConnectionGraphic } from './components/graphics/graphic.component';


@NgModule({
    imports: [
        BrowserModule,
        RouterModule,
        CommonModule,
        ChartsModule
    ],
    declarations: [
        ServersTableComponent,
        BackendsTableComponent,
        HeaderComponent,
        SortPopupComponent,
        DropDownComponent,
        RadioButtonsComponent,
        ConnectionGraphic
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
        BackendsTableComponent,
        ConnectionGraphic
    ]
})

export class ComponentsModule { }
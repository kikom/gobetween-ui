import {NgModule} from "@angular/core";
import {BrowserModule}  from "@angular/platform-browser";
import { RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { ServersTableComponent } from "./components/common/servers-table.component";
import { BackendsTableComponent } from "./components/common/backends-table.component";
import { HeaderComponent } from "./components/header.component";
import { SortPopupComponent } from "./components/common/sort-popup.component";
import { DropDownComponent } from './components/common/drop-down.component';
import { RadioButtonsComponent } from './components/common/radio-buttons.component';
import { ConnectionGraphic } from './components/common/graphic.component';
import { PreloaderComponent } from './components/common/preloader.component';

import {MapToIterablePipe} from "./pipes/map-to-iterable.pipe";
import {SortPipe} from "./pipes/sort.pipe";
import {StatsPipe} from "./pipes/stats.pipe";

import {ApiService} from "./services/api.service";
import {ServersService} from "./services/servers.service";
import {SortServerService} from "./services/sort-servers.service";

import {FetchGuard} from "./guards/fetch.quard"


@NgModule({
    imports: [
        BrowserModule,
        RouterModule,
        ChartsModule
    ],
    declarations: [
        MapToIterablePipe,
        SortPipe,
        StatsPipe,
        ServersTableComponent,
        BackendsTableComponent,
        HeaderComponent,
        SortPopupComponent,
        DropDownComponent,
        RadioButtonsComponent,
        ConnectionGraphic,
        PreloaderComponent
    ],
    exports: [
        MapToIterablePipe,
        SortPipe,
        StatsPipe,
        ServersTableComponent,
        BackendsTableComponent,
        HeaderComponent,
        SortPopupComponent,
        DropDownComponent,
        RadioButtonsComponent,
        ConnectionGraphic,
        PreloaderComponent
    ],
    providers:[
        ApiService,
        ServersService,
        SortServerService,
        FetchGuard
    ]
})
export class CommonModule { }

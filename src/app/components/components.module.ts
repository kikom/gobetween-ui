import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { MenuPopupService} from "../services/menu-popup.service";

import { TableComponent } from "./table.component";
import { HeaderComponent } from "./header.component";
import { MenuPopupComponent } from "./menu-popup.component";


@NgModule({
    imports: [
        BrowserModule,
        RouterModule
    ],
    declarations: [
        TableComponent,
        HeaderComponent,
        MenuPopupComponent
    ],
    providers: [
        MenuPopupService
    ],
    exports: [
        TableComponent,
        HeaderComponent,
        MenuPopupComponent
    ]
})

export class ComponentsModule { }
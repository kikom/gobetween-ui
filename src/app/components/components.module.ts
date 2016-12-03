import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { TableComponent } from "./table.component";
import { HeaderComponent } from "./header.component";


@NgModule({
    imports: [
        BrowserModule,
        RouterModule
    ],
    declarations: [
        TableComponent,
        HeaderComponent
    ],
    exports: [
        TableComponent,
        HeaderComponent
    ]
})

export class ComponentsModule { }
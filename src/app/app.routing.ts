import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ServersComponent} from "./servers.component";
import {InfoComponent} from "./info.component";
import {AboutComponent} from "./about.component";

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/servers',
        pathMatch: 'full'
    },
    {
        path: 'servers',
        component: ServersComponent
    },
    {
        path: 'info',
        component: InfoComponent
    },
    {
        path: 'about',
        component: AboutComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
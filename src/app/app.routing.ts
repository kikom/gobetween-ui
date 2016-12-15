import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ServersComponent} from "./pages/servers.component";
import {ServerDetailComponent} from "./pages/server-detail.component";
import {InfoComponent} from "./pages/info.component";
import {AboutComponent} from "./pages/about.component";

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/servers',
        pathMatch: 'full'
    },
    {
        path: 'servers/:id',
        component: ServerDetailComponent
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
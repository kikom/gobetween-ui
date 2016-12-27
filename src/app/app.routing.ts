import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ServersComponent} from "./pages/servers.component";
import {ServerDetailComponent} from "./pages/server-detail.component";
import {BackendDetailComponent} from "./pages/backend-detail.component";
import {AboutComponent} from "./pages/about.component";

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/servers',
        pathMatch: 'full'
    },
    {
        path: 'servers/:server-id/:backend-id',
        component: BackendDetailComponent
    },
    {
        path: 'servers/:server-id',
        component: ServerDetailComponent
    },
    {
        path: 'servers',
        component: ServersComponent
    },
    {
        path: 'about',
        component: AboutComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import {FetchGuard} from "./guards/fetch.quard";

import {AppLayoutComponent} from "./components/app-layout.component";
import {ServersComponent} from "./components/pages/servers.component";
import {ServerDetailComponent} from "./components/pages/server-detail.component";
import {BackendDetailComponent} from "./components/pages/backend-detail.component";
import {AboutComponent} from "./components/pages/about.component";
import {LoginComponent} from "./components/pages/login.component";

const appRoutes: Routes = [
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: '',
        redirectTo: '/servers',
        pathMatch: 'full'
    },
    {
        path: "",
        canActivate: [FetchGuard],
        component: AppLayoutComponent,
        children: [
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
        ]
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, {useHash: true});
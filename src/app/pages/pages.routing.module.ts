import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';

import { GuardService } from '../shared';

const routes: Routes = [
  {
    path: '',component: PagesComponent,
    children: [

      { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule', canActivate: [GuardService] },
      { path: 'error404', loadChildren: './notfound/notfound.module#NotfoundModule', canActivate: [GuardService] },
      { path: '**', redirectTo: 'error404'}
    ]
  }
];

@NgModule ({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    GuardService
  ]
})

export class PagesRoutingModule {
  
}
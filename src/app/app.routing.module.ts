import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';

import { GuardService } from './shared';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './authentication/login/login.module#LoginModule' },
  { path: 'error404', loadChildren: './authentication/error404/error404.module#Error404Module' },
  { path: 'register', loadChildren: './authentication/register/register.module#RegisterModule' },
  { path: 'reminder', loadChildren: './authentication/reminder/reminder.module#ReminderModule' },
  { path: 'pages', loadChildren: './pages/pages.module#PagesModule',canActivate:[GuardService] },
  { path: '**', redirectTo: 'error404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
  
}
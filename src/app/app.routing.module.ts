import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './shared/guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: './login/login.module#LoginModule',
    canActivate: [AuthGuard]
  },
  { path: 'login', loadChildren: './login/login.module#LoginModule' },
  { path: 'error404', loadChildren: './error404/error404.module#Error404Module' },
  { path: 'register', loadChildren: './register/register.module#RegisterModule' },
  { path: 'reminder', loadChildren: './reminder/reminder.module#ReminderModule' },
  { path: '**', redirectTo: 'error404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
  
}
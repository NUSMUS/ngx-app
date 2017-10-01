import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';

import { GuardService } from '../shared'; 

import { PagesRoutingModule } from './pages.routing.module';

import { FooterComponent,
         HeaderComponent,
         MenuComponent,
         ProfileMenuComponent,
         SearchComponent,
         ThemeColorComponent,
         UserMenuComponent } from '../shared/components';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule
  ],
  declarations: [
    PagesComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent,
    ProfileMenuComponent,
    SearchComponent,
    ThemeColorComponent,
    UserMenuComponent
  ],
  providers: [
    GuardService
  ]
})
export class PagesModule { }

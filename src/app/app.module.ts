import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, Http } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app.routing.module';


import { GuardService } from './shared';
import { AutenticacionService } from './shared';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
  ],
  providers: [
    GuardService,
    AutenticacionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

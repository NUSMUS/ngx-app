import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotfoundComponent } from './notfound.component';

import { NotFoundRoutingModule } from './notfound.routing.module';

@NgModule({
  imports: [
    CommonModule,
    NotFoundRoutingModule
  ],
  declarations: [NotfoundComponent]
})
export class NotfoundModule { }

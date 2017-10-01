import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReminderComponent } from './reminder.component';

import { ReminderrRoutingModule } from './reminder.routing.module';
@NgModule({
  imports: [
    CommonModule,
    ReminderrRoutingModule
  ],
  declarations: [ReminderComponent]
})
export class ReminderModule { }

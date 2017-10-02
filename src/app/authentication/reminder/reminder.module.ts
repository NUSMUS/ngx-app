import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReminderComponent } from './reminder.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ReminderrRoutingModule } from './reminder.routing.module';

@NgModule({
  imports: [
    CommonModule,
    ReminderrRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  declarations: [
    ReminderComponent
  ],
  providers: [
  ]
})
export class ReminderModule { }

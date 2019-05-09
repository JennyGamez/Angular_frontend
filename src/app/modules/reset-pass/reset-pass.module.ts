import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResetPassRoutingModule } from './reset-pass-routing.module';
import { ResetPassComponent } from './reset-pass/reset-pass.component';

@NgModule({
  declarations: [ResetPassComponent],
  imports: [
    CommonModule,
    ResetPassRoutingModule
  ]
})
export class ResetPassModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { ResetPassRoutingModule } from './reset-pass-routing.module';
import { ResetPassComponent } from './reset-pass/reset-pass.component';

@NgModule({
  declarations: [ResetPassComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ResetPassRoutingModule
  ]
})
export class ResetPassModule { }

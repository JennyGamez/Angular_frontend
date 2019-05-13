import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { ResetTokenPassComponent } from './reset-token-pass/reset-token-pass.component';

@NgModule({
  declarations: [ResetTokenPassComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ResetTokenPassModule { }

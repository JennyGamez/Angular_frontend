import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { ResetTokenPassComponent } from './reset-token-pass/reset-token-pass.component';
import { LoadingScreenComponent } from '@components/loading-screen/loading-screen.component';

@NgModule({
  declarations: [ResetTokenPassComponent, LoadingScreenComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ResetTokenPassModule { }

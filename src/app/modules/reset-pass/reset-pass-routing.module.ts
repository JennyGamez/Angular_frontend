import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ResetPassComponent} from "./reset-pass/reset-pass.component";

const routes: Routes = [{
  path: 'reset', component: ResetPassComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResetPassRoutingModule { }

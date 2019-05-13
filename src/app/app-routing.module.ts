import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResetTokenPassComponent } from './modules/reset-token-pass/reset-token-pass/reset-token-pass.component';

const routes: Routes = [
  //{ path: '', redirectTo: 'starter', pathMatch: 'full' }
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'resettokenpass', component: ResetTokenPassComponent,}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

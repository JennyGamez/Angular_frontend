import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StarterModule } from './modules/starter/starter.module';
import { LoginModule } from './modules/login/login.module';
import { ResetPassModule } from './modules/reset-pass/reset-pass.module';
import { ResetTokenPassModule } from './modules/reset-token-pass/reset-token-pass.module';



@NgModule({
  declarations: [
    AppComponent,
    //LoadingScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StarterModule,
    HttpModule,
    HttpClientModule,
    LoginModule,
    ResetPassModule,
    ResetTokenPassModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

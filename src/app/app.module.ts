import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CommonModule} from '@angular/common';

import { HamburgersModule } from './hamburgers/hamburger.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    //angular modules
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    //custom modules
    HamburgersModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

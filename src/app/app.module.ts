import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Partie1Component } from './partie1/partie1.component';
import { Partie2Component } from './partie2/partie2.component';

@NgModule({
  declarations: [
    AppComponent,
    Partie1Component,
    Partie2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

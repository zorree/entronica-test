import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Q2Component } from './q2/q2.component';
import { Q1Component } from './q1/q1.component';
import { Q4Component } from './q4/q4.component';
import { Q3Component } from './q3/q3.component';
import { Q5Component } from './q5/q5.component';
import { Q6Component } from './q6/q6.component';

@NgModule({
  declarations: [
    AppComponent,
    Q2Component,
    Q1Component,
    Q4Component,
    Q3Component,
    Q5Component,
    Q6Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

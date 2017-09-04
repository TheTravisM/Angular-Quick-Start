import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }            from './app.component';
import { CustomerListComponent }   from './customer-list.component';
import { CustomerDetailComponent } from './customer-detail.component';
import { AddressComponent }        from './address.component';



// This decorator describes the class that follows it
@NgModule({
  imports:      [ BrowserModule, FormsModule ], // What stuff do I need?
  declarations: [
    AppComponent,
    AddressComponent,
    CustomerListComponent,
    CustomerDetailComponent
  ],  // What's in my app module?
  bootstrap:    [ AppComponent ]   // Where do I start?
})
export class AppModule { }

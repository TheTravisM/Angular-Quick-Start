import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';  // <-- import HttpModule


import { AppComponent } from './app.component';
import { AddressComponent } from './address.component';
import { CustomerListComponent }   from './customer-list.component';
import { CustomerDetailComponent } from './customer-detail.component';

import { DataService }             from './data.service';
import { LoggerService }           from './logger.service';

// in-mem-web-api and its test-data service
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDbService }    from './in-memory-data.service';

// This decorator describes the class that follows it
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDbService)
  ], // What stuff do I need?
  declarations: [
    AppComponent,
    AddressComponent,
    CustomerListComponent,
    CustomerDetailComponent
  ],  // What's in my app module?
  providers: [
    DataService,
    LoggerService
  ],
  bootstrap:    [ AppComponent ]   // Where do I start?
})
export class AppModule { }

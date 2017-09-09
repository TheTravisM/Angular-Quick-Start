import { Component, OnInit } from '@angular/core';

import { Customer } from './model';

import { DataService } from './data.service';
import { LoggerService } from './logger.service';

@Component({
  moduleId: module.id,
  selector: 'customer-list',
  templateUrl: 'customer-list.component.html',
  styleUrls: ['customer-list.component.css']
})

export class CustomerListComponent implements OnInit {
  customers: Customer[]; // where did the data go
  customer: Customer;
  isBusy = false;

  constructor(
    private dataService: DataService,
    private loggerService: LoggerService
  ) { }

  // Lifecycle goes here
  ngOnInit() {
    this.getCustomers();
  }

  getCustomers() {
    this.customer = undefined;  // <-- clear before refresh
    this.customers = undefined;

    this.isBusy = true;
    this.loggerService.log('Getting customers... ');

    // this.dataService.getCustomersP().then(custs => {
    this.dataService.getCustomers().subscribe(custs => {
      this.isBusy = false;
      this.customers = custs;
    }, (errorMessage: string) => {
      this.isBusy = false;
      alert(errorMessage); // TODO: never do an alert
    });
  }

  shift(increment: number) {
    let ix = this.customers.findIndex(c => c === this.customer) + increment;
    ix = Math.min(this.customers.length - 1, Math.max(0, ix));
    this.customer = this.customers[ix];
  }
}

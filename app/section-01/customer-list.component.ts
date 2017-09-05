import { Component } from '@angular/core';
import { Customer } from './model';

@Component({
  moduleId: module.id,
  selector: 'customer-list',
  templateUrl: 'customer-list.component.html',
  styleUrls: ['customer-list.component.css']
})

export class CustomerListComponent {
  customers: Customer[] = [];

  customer: Customer;

  shift(increment: number) {
    let ix = this.customers.findIndex(c => c === this.customer) + increment;
    ix = Math.min(this.customers.length - 1, Math.max(0, ix));
    this.customer = this.customers[ix];
  }
}

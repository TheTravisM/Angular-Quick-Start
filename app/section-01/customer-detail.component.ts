import { Component } from '@angular/core';
import { Customer } from './model';

@Component({
  moduleId: module.id,
  selector: 'customer-detail',
  templateUrl: 'customer-detail.component.html'
})

export class CustomerDetailComponent {

  regions = ['East', 'South', 'North', 'Midwest', 'West', 'The Wall'];

  states = [ 'California', 'Quebec', 'Jalisco', 'Illinois'];

  customer: Customer;

  showAddress = true;
}

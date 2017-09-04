import { Component, Input } from '@angular/core';

import { Address } from './model';

@Component({
  moduleId: module.id,
  selector: 'my-address',
  templateUrl: 'address.component.html',
  styleUrls: ['address.component.css']
})

export class AddressComponent {
  @Input() address: Address;

  regions = ['East', 'South', 'North', 'Midwest', 'West', 'The Wall'];
  states = [ 'California', 'Quebec', 'Jalisco', 'Illinois'];

}

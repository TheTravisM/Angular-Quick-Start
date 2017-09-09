import { Component, Input, OnInit } from '@angular/core';

import { Address } from './model';
import { DataService } from './data.service';

@Component({
  moduleId: module.id,
  selector: 'my-address',
  templateUrl: 'address.component.html',
  styleUrls: ['address.component.css']
})

export class AddressComponent implements OnInit{
  @Input() address: Address;

  regions = ['East', 'South', 'North', 'Midwest', 'West', 'The Wall'];
  // states = [ 'California', 'Quebec', 'Jalisco', 'Illinois'];
  states: string[];

  constructor(private dataService: DataService) {

  }

  ngOnInit() {
    this.dataService.getStates().subscribe(states => {
      this.states = states;
    });
  }

}

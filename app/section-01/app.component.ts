import { Component } from '@angular/core';
import { Customer } from './model';

@Component({
  selector: 'my-app',
  template: `
  <h1>{{customer.name}}</h1>

  <p>
    <i> {{customer.name}} is at
        {{customer.address.street}} in
        {{customer.address.city}},
        {{customer.address.state}} in the
        {{customer.address.region}} region.
    </i>
  </p>

  <fieldset>
    <label>
      Name:
      <input [(ngModel)]="customer.name" placeholder="Customer name">
    </label>
  </fieldset>

  <br>
  <label><input type="checkbox" [(ngModel)]="hideAddress"/>Hide address</label>

  <div [hidden]="hideAddress">
    <h3>Address:</h3>
    <fieldset>
      <label>
        Street:
        <input [(ngModel)]="customer.address.street" placeholder="Street">
      </label>
    </fieldset>
    <fieldset>
      <label>
        City:
        <input [(ngModel)]="customer.address.city" placeholder="City">
      </label>
    </fieldset>
    <fieldset>
      <label>
        State:
        <select [(ngModel)]="customer.address.state">
          <option>California</option>
          <option>Ohio</option>
          <option>Flordia</option>
          <option>Boston</option>
        </select>
      </label>
    </fieldset>
    <fieldset>
      <label>
        Region:
        <select [(ngModel)]="customer.address.region">
          <option>North</option>
          <option>South</option>
          <option>East</option>
          <option>West</option>
        </select>
      </label>
    </fieldset>
  </div>
  `,
})

export class AppComponent  {
  customer: Customer = {
    id: 1,
    name: 'Alex Smith',
    address: {
      city: 'Anytown',
      street: '123 Main Street',
      state: 'California',
      region: 'East'
    }
  };
  hideAddress = false;
}

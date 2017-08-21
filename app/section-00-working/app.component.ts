import { Component } from '@angular/core';

@Component({
  selector: 'my-app', // to use me, put <my-app> in index.html
  template: `
    <h1>Hello {{name}}</h1>
    <p><i>{{name}} is in the {{region}} region</i></p>

    <br/>

    <input [value]="name"><br/>
    <input #namebox [value]="name" (input)="name=namebox.value">
    <br/>

    <button (click)="addressClick()">Show Hide Address</button>

    <div [hidden]="hideAddress">

      <fieldset>
        <label>Street: </label> {{street}}
      </fieldset>

      <fieldset>
        <label>City: </label> {{city}}
      </fieldset>

      <fieldset>
        <label>Region: </label>
          <select (change)="regionChange($event.target.value)">
            <option>North</option>
            <option>South</option>
            <option>East</option>
            <option>West</option>
          </select>
      </fieldset>

    </div>
  `
})
export class AppComponent  {
  name = 'Kick Ass Brock Samson';
  city = 'Anytown';
  street = '123 Main Street';
  region = 'north';
  hideAddress = false;

  addressClick() {
    this.hideAddress = !this.hideAddress;
  }

  regionChange(region: string) {
    this.region = region;
  }
}


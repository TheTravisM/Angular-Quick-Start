import { Component } from '@angular/core';

@Component({
  selector: 'my-app', // to use me, put <my-app> in index.html
  template: `
    <h1>Hello {{name}}</h1>
    <p><i>{{name}} is in the {{region}} region</i></p>
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

    <br/>
    <br/>


    <fieldset>
      <img [src]="image" />
    </fieldset>

    <label [style.color]="color">Favorite Color: </label>{{color}}
    <button (click)="clicked()">Toggle Color</button>
    <select #selector (change)="colorChange(selector.value)">
      <option>Red</option>
      <option>Blue</option>
      <option>Green</option>
      <option>Purple</option>
      <option>Gray</option>
    </select>
    <br>
    <br>

    <label [style.color]="colorTwo">Favorite Color: </label>{{colorTwo}}
    <select (change)="colorChange2($event.target.value)">
      <option>Red</option>
      <option>Blue</option>
      <option>Green</option>
      <option>Purple</option>
      <option>Gray</option>
    </select>

    <br>

    <address [hidden]="hideAddress2">
      <label>Street: </label>{{street}}
      <br>
      <label>City: </label>{{city}}
    </address>
  <button (click)="addressClick2()">show/hide address</button>
    `
})
export class AppComponent  {
  name = 'Kick Ass Brock Samson';
  image = 'favicon.ico';
  color = 'red';
  colorTwo = 'green';
  street = '123 Main Street';
  city = 'Anytown';
  hideAddress = false;
  hideAddress2 = false;
  region = 'north';

  addressClick() {
    this.hideAddress = !this.hideAddress;
  }

  regionChange(region: string) {
    this.region = region;
  }

  clicked() {
    this.color = this.color === 'red' ? 'blue' : 'red';
  }

  colorChange(color: string) {
    this.color = color;
  }

  colorChange2(color: string) {
    this.colorTwo = color;
  }

  addressClick2(hideAddress2: false) {
    this.hideAddress2 = this.hideAddress2 === false ? true : false;
  }

}


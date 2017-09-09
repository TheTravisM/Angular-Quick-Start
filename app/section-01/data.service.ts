import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';  // <-- import Http & Headers
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'; // <-- add rxjs operator extensions used here
import 'rxjs/add/observable/throw'; // <-- add rxjs Observable extensions used here

import { createTestCustomers } from './test-data';
import { LoggerService } from './logger.service';
import { Customer } from './model';

import 'rxjs/add/operator/share';


@Injectable()
export class DataService {
  private customersUrl = 'api/customers';
  private statesUrl = 'api/states';

  constructor (
    private loggerService: LoggerService,
    private http: Http // <-- inject http
  ) { }

  getCustomersP(): Promise<Customer[]> {
    this.loggerService.log(`Getting customers as a Promise via Http ...`);

    return this.http.get(this.customersUrl) // <-- returns an observable
      .toPromise() // <-- convert immediately to a promise
      .then(response => {
        const custs = response.json().data as Customer[];
        this.loggerService.log(`Got ${custs.length} customers`);
        return custs;
      },
      error => {
        this.loggerService.log(`Error Occurred ${error}`);
        return Promise.reject('Something bad happened please check the console');
      }
    );
  }

  getCustomers(): Observable<Customer[]> {
    this.loggerService.log('Getting customers as a Observable via Http...');

    return this.http.get(this.customersUrl) // <-- returns an observable
      .map(responce => responce.json().data as Customer[])
      .do((custs) => {
        this.loggerService.log(`Got ${custs.length} customers`);
      })
      .catch((error: any) => {
        this.loggerService.log(`Error Occurred ${error}`);
        return Observable.throw('Something bad happened to get customers please check the console');
      });
  }

  getStates(): Observable<string[]> {
    this.loggerService.log('Getting states as a Observable via Http...');

    return this.http.get(this.statesUrl) // <-- returns an observable
      .map(responce => responce.json().data as string[])
      .do((states) => {
        this.loggerService.log(`Got ${states.length} states`);
      })
      .catch((error: any) => {
        this.loggerService.log(`Error Occurred ${error}`);
        return Observable.throw('Something bad happened to states please check the console');
      });
  }
}

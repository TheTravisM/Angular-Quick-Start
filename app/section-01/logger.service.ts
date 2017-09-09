import { Injectable } from '@angular/core';

import { createTestCustomers } from './test-data';

@Injectable()
export class LoggerService {
  log(message: string) {
    console.log(message);
  }
}

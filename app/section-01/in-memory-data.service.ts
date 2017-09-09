import { InMemoryDbService } from 'angular-in-memory-web-api';

import { createTestCustomers } from './test-data';

export class InMemoryDbService implements InMemoryDbService {
  createDb() {
    const states = [ 'California', 'Quebec', 'Jalisco', 'Illinois'];
    return {
      customers: createTestCustomers(),
      states
    };
  }
}

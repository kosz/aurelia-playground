import {CustomService} from 'custom-service/custom-service';

export class Hello {
  static inject() { return [CustomService]; }
  constructor(service) {
    this.service = service;
  }
}

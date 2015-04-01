import {CustomService} from 'custom-service/custom-service';

export class Welcome{
  static inject() { return [CustomService]; }
  constructor(service){
    this.heading = 'Welcome to the Aurelia Navigation App!';
    this.firstName = 'John';
    this.service = service;
  }

  get fullName(){
    return `${this.firstName} ${this.service.globalValue}`;
  }

  welcome(){
    alert(`Welcome, ${this.fullName}!`);
  }
}

export class UpperValueConverter {
  toView(value){
    return value && value.toUpperCase();
  }
}

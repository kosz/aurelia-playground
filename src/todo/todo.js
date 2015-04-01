//import {CustomService} from 'custom-service/custom-service';

export class Todo{
  //static inject() { return [HttpClient,CustomService]; }
  constructor(){
    this.todos = [
      { text: 'Todo 1', done: false },
      { text: 'Todo 2', done: false }
    ];
  }
}

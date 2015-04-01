import {Router} from 'aurelia-router';
import bootstrap from 'bootstrap';

export class App {
  static inject() { return [Router]; }
  constructor(router) {
    this.router = router;
    this.router.configure(config => {
      config.title = 'Aur';
      config.map([{ 
        route: ['','welcome'],  
        moduleId: './welcome',      
        nav: true, 
        title:'Welcome' 
      }, {
        route: 'hello',
        moduleId: './flickr',
        nav: true,
        title: 'Hello'
      }
      ]);
    });
  }
}

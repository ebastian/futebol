import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <eb-nav></eb-nav>
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `
})

export class AppComponent { }

import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <eb-nav></eb-nav>
    <br><br>
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `
})

export class AppComponent { }

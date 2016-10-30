import { Component } from '@angular/core';

@Component({
  selector: 'eb-nav',
  template: `
    <nav class="navbar navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <a class="navbar-brand" href="#" routerLink="/timeline">Futeboleiro</a>
          <a class="navbar-brand" href="#" routerLink="/perfil">Perfil</a>
          <a class="navbar-brand" href="#" routerLink="/teams">Teams</a>
          <a class="navbar-brand" href="#" routerLink="/games">Games</a>
        </div>
      </div>
    </nav>
  `
})

export class NavComponent { }

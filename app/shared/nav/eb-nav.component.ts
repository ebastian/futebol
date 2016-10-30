import { Component } from '@angular/core';

@Component({
  selector: 'eb-nav',
  template: `
    <nav class="navbar navbar-default">
      <div class="container">
        <div class="navbar-header">
          <a class="navbar-brand" href="#" routerLink="/timeline">Futeaboleiro</a>
          <a class="navbar-brand" href="#" routerLink="/perfil">Perfil</a>
          <a class="navbar-brand" href="#" routerLink="/players">Jogadores</a>
          <a class="navbar-brand" href="#" routerLink="/teams">Times</a>
          <a class="navbar-brand" href="#" routerLink="/games">Jogos</a>
        </div>
      </div>
    </nav>
  `
})

export class NavComponent { }

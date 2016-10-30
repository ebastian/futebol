import { Component } from '@angular/core';

@Component({
  selector: 'eb-nav',
  template: `
    <nav>
     <a href="#" routerLink="/timeline">Futeboleiro</a> |
     <a href="#" routerLink="/perfil">Perfil</a> |
     <a href="#" routerLink="/teams">Times</a> |
     <a href="#" routerLink="/games">Jogos</a>
    </nav>
    <hr>
  `
})

export class NavComponent { }

import { Component, OnInit } from '@angular/core';

//import { Game } from '../../entities/game';
//import { GameService } from '../../services/game.service';

@Component({
  template: `
    <eb-form-screen [title]="'Jogo'" [listpath]="'games'">
      <br>
      <br>
      Não disponível.
      <br>
      <br>
    </eb-form-screen>
  `
})

export class GameComponent implements OnInit {
  /*
  game: Game;

  constructor(
    private gameService:GameService
  ) {  }
  */
  ngOnInit():void {

  }
}

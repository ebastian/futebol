import { Component, OnInit } from '@angular/core';

import { Player } from '../../entities/player';
import { PlayerService } from '../../services/player.service';

@Component({
  template: `
    <eb-form-header [title]="'Jogador'" [listpath]="'players'"></eb-form-header>
    <eb-registry-form [listpath]="'players'">
      Não há form
    </eb-registry-form>
  `,
  providers: [
    PlayerService
  ]
})

export class PlayerComponent implements OnInit {

  players: Player;

  constructor(
    private playerService:PlayerService
  ) {  }

  ngOnInit():void {

  }
}

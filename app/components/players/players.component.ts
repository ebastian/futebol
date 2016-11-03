import { Component, OnInit } from '@angular/core';

import { Player } from '../../entities/player';
import { PlayerService } from '../../services/player.service';

@Component({
  template: `
    <eb-list-header [title]="'Jogadores'" [formpath]="'player'"></eb-list-header>
    <eb-registry-list [columns]="columns" [data]="players"></eb-registry-list>
  `,
  providers: [
    PlayerService
  ]
})

export class PlayersComponent implements OnInit {

  players: Player[];

  columns = [
    {
      field: "id",
      description: "Id"
    },
    {
      field: "name",
      description: "Nome"
    },
    {
      field: "email",
      description: "E-mail"
    },
    {
      field: "rating",
      description: "Rating"
    }
  ];

  constructor(
    private playerService:PlayerService
  ) { }

  ngOnInit():void {
    this.getPlayers();
  }

  getPlayers():void {
     this.playerService.getPlayers().then(players => this.players = players);
  }
}

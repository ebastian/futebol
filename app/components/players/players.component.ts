import { Component, OnInit } from '@angular/core';

import { Player } from '../../entities/player';
import { PlayerService } from '../../services/player.service';

@Component({
  template: `
    <eb-list-screen
      [title]="'Jogadores'"
      [formpath]="'player'"
      [columns]="columns"
      [data]="players"
      (onDelete)="delete($event)">
    </eb-list-screen>
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

  delete(id: number):void {
    this.playerService.remove(id);
  }
}

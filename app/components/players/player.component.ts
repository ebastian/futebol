import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';

import { Player } from '../../entities/player';
import { PlayerService } from '../../services/player.service';

@Component({
  template: `
    <eb-form-screen [title]="'Jogador'" [listpath]="'players'" [registry]="player" (onSave)="save()" (onDelete)="delete()">
      <div class="form-group">
        <label for="inputName">Nome</label>
        <input id="inputName" class="form-control" placeholder="nome" required="" autofocus="" [(ngModel)]="player.name">
      </div>
    </eb-form-screen>
  `,
  providers: [
    PlayerService
  ]
})

export class PlayerComponent implements OnInit {

  player: Player = new Player();

  constructor(
    private playerService:PlayerService,
    private route: ActivatedRoute,
  ) {  }

  ngOnInit():void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      if(!isNaN(id)) {
        this.playerService.getPlayer(id).then(player => this.player = player);
      }
    });
  }

  save():void {
    this.playerService.save(this.player);
  }

  delete():void {
    this.playerService.remove(this.player.id);
  }
}

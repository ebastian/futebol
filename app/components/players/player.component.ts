import { Inject, Component, OnInit, AfterContentInit } from '@angular/core';
import { ActivatedRoute }   from '@angular/router';
import { Router } from '@angular/router';

import { FormScreenComponent } from '../../shared/registryform/form-screen.component';

import { Player } from '../../entities/player';
import { PlayerService } from '../../services/player.service';

@Component({
  template: `
    <!--<eb-form-screen [title]="'Jogador'" [listpath]="'players'" [registry]="player" (onSave)="save()" (onDelete)="delete()">-->
    <eb-form-header [registry]="registry" [title]="'Jogador'" [listpath]="'players'"></eb-form-header>
    <eb-registry-form  #regForm [registry]="registry" (onSave)="save($event)" (onDelete)="delete($event)" (onCancel)="cancel($event)">
      <div class="form-group">
        <label for="inputName">Nome</label>
        <input id="inputName" class="form-control" placeholder="nome" required="" autofocus="" [(ngModel)]="registry.name">
      </div>
    </eb-registry-form>
    <!--</eb-form-screen>-->
  `,
  providers: [
    PlayerService
  ]
})

export class PlayerComponent extends FormScreenComponent {

  constructor(
    @Inject(ActivatedRoute) route: ActivatedRoute,
    @Inject(Router) router: Router,
    @Inject(PlayerService) playerService:PlayerService
  ) {
    super(route, router, playerService);
    this.registry = new Player();
    this.listpath = 'players';
  }

}

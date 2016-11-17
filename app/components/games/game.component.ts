import { Inject, Component, OnInit, AfterContentInit } from '@angular/core';
import { ActivatedRoute }   from '@angular/router';
import { Router } from '@angular/router';

import { FormScreenComponent } from '../../shared/registryform/form-screen.component';

import { Game } from '../../entities/game';
import { GameService } from '../../services/game.service';

@Component({
  template: `
    <!--<eb-form-screen [title]="'Jogo'" [listpath]="'games'">-->
    <eb-form-header [title]="'Jogo'" [listpath]="'games'"></eb-form-header>
    <eb-registry-form [registry]="registry" (onSave)="save($event)" (onDelete)="delete($event)" (onCancel)="cancel($event)">
      <br>
      <br>
      Não disponível.
      <br>
      <br>
    </eb-registry-form>
  `,
  providers: [
    GameService
  ]
})

export class GameComponent extends FormScreenComponent {

  constructor(
    @Inject(ActivatedRoute) route: ActivatedRoute,
    @Inject(Router) router: Router,
    @Inject(GameService) gameService:GameService
  ) {
    super(route, router, gameService);
    this.registry = new Game();
    this.listpath = 'games';
  }
}

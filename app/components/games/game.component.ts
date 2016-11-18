import { Inject, Component, OnInit, AfterContentInit } from '@angular/core';
import { ActivatedRoute }   from '@angular/router';
import { Router } from '@angular/router';

import { FormScreenComponent } from '../../shared/registryform/form-screen.component';

import { Game } from '../../entities/game';
import { GameService } from '../../services/game.service';

@Component({
  template: `
    <!--<eb-form-screen [title]="'Jogo'" [listpath]="'games'">-->
    <eb-form-header [registry]="registry" [title]="'Jogo'" [listpath]="'games'"></eb-form-header>
    <eb-registry-form #regForm [registry]="registry" (onSave)="save($event)" (onDelete)="delete($event)" (onCancel)="cancel($event)">
    <div class="form-group">
      <label for="inputName">Nome</label>
      <input id="inputName" class="form-control" placeholder="nome" required="" autofocus="" [(ngModel)]="registry.name">
    </div>
    <div class="form-group">
      <label for="inputDescription">Descrição</label>
      <input id="inputDescription" class="form-control" placeholder="descrição" required="" autofocus="" [(ngModel)]="registry.description">
    </div>
    <div class="form-group">
      <label for="inputType">Tipo</label>
      <input id="inputType" class="form-control" placeholder="tipo" required="" autofocus="" [(ngModel)]="registry.type">
    </div>
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

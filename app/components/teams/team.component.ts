import { Component, OnInit } from '@angular/core';

import { Team } from '../../entities/team';
import { TeamService } from '../../services/team.service';

@Component({
  template: `
    <eb-form-header [title]="'Time'" [listpath]="'teams'"></eb-form-header>
    <eb-registry-form [listpath]="'teams'">
      <div class="form-group">
        <label for="inputName">Nome</label>
        <input id="inputName" class="form-control" placeholder="nome" required="" autofocus="">
      </div>
      <div class="form-group">
        <label for="inputEmail">Descrição</label>
        <input id="inputEmail" class="form-control" placeholder="descrição" required="" autofocus="">
      </div>
      <div class="form-group">
        <label for="inputPassword">Tipo</label>
        <input id="inputPassword" class="form-control" placeholder="tipo" required="">
      </div>
    </eb-registry-form>
  `,
  providers: [
    TeamService
  ]
})

export class TeamComponent implements OnInit {

  teams: Team[];

  constructor(
    private playerService:TeamService
  ) {  }

  ngOnInit():void {

  }
}

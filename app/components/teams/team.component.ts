import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';

import { Team } from '../../entities/team';
import { TeamService } from '../../services/team.service';

@Component({
  template: `
    <eb-form-screen [title]="'Time'" [listpath]="'teams'" [registry]="team" (onSave)="save()" (onDelete)="delete()">
      <div class="form-group col-md-6">
        <label for="inputName">Nome</label>
        <input id="inputName" class="form-control" placeholder="nome" required="" autofocus="">
      </div>
      <div class="form-group col-md-6">
        <label for="inputPassword">Tipo</label>
        <input id="inputPassword" class="form-control" placeholder="tipo" required="">
      </div>
      <div class="form-group col-md-12">
        <label for="inputDesc">Descrição</label>
        <textarea id="inputDesc" class="form-control" placeholder="descrição" required="" autofocus=""></textarea>
      </div>
    </eb-form-screen>
  `,
  providers: [
    TeamService
  ]
})

export class TeamComponent implements OnInit {

  team: Team = new Team();

  constructor(
    private teamService:TeamService,
    private route: ActivatedRoute,
  ) {  }

  ngOnInit():void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      if(!isNaN(id)) {
        this.teamService.getTeam(id).then(team => this.team = team);
      }
    });
  }

  save():void {
    this.teamService.save(this.team);
  }

  delete():void {
    this.teamService.remove(this.team.id);
  }
}

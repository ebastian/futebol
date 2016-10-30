import { Component, OnInit } from '@angular/core';

import { Team } from '../../entities/team';
import { TeamService } from '../../services/team.service';

@Component({
  template: `
    <eb-list-header [title]="'Times'"></eb-list-header>
    <eb-registry-list [columns]="columns" [data]="teams"></eb-registry-list>
  `,
  providers: [
    TeamService
  ]
})

export class TeamsComponent implements OnInit {

  teams: Team[];

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
      field: "description",
      description: "Descrição"
    },
    {
      field: "players",
      description: "Jogadores"
    }
  ];

  constructor(
    private teamService:TeamService
  ) {

  }

  ngOnInit():void {
    this.getTeams();
  }

  getTeams():void {
     this.teamService.getTeams().then(teams => this.teams = teams);
  }

}

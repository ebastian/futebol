import { Component, OnInit } from '@angular/core';

import { Team } from '../../entities/team';
import { TeamService } from '../../services/team.service';

@Component({
  template: `
    <eb-list-screen
      [title]="'Times'"
      [formpath]="'team'"
      [columns]="columns"
      [data]="teams"
      (onDelete)="delete($event)">
    </eb-list-screen>
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

  delete(id: number):void {
    this.teamService.remove(id);
  }

}

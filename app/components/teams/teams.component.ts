import { Component, OnInit } from '@angular/core';

import { Team } from '../../entities/Team';
import { TeamService } from '../../services/team.service';

@Component({
  template: `
    <h3>Times</h3>
    <eb-registry-list (dataProvider)="teams"></eb-registry-list>
  `,
  providers: [
    TeamService
  ]
})

export class TeamsComponent implements OnInit {

  teams: Team[];

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

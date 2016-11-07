import { Injectable } from '@angular/core';

import { Team } from '../entities/team';
import { TEAMS } from './team.mock';

@Injectable()
export class TeamService {

  getTeams(): Promise<Team[]> {
    return Promise.resolve(TEAMS);
  }

  save(team:Team):void {
    if(team.id === undefined || team.id === null) {
      team.id = TEAMS[TEAMS.length-1].id + 1;
      TEAMS.push(team);
      console.log("Adicionou " + team.id);
    } else {
      this.getTeamIndex(team.id).then(
        index => TEAMS[index] = team
      );
    }
  }

  getTeam(id: number): Promise<Team> {
    return this.getTeams().then(teams => teams.find(team => team.id === id));
  }

  getTeamIndex(id: number): Promise<number> {
    return this.getTeams().then(teams => teams.findIndex(team => team.id === id));
  }

  remove(id: number): Promise<Team[]> {
    return this.getTeamIndex(id).then(index => this.getTeams().then(teams => teams.splice(index, 1)));
  }
}

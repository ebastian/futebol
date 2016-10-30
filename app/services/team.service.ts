import { Injectable } from '@angular/core';

import { Team } from '../entities/team';
import { TEAMS } from './team.mock';

@Injectable()
export class TeamService {

  getTeams(): Promise<Team[]> {
    return Promise.resolve(TEAMS);
  }
}

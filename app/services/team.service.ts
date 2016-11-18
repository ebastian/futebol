import { Injectable } from '@angular/core';

import { GenericService }   from '../shared/service/generic-service';

import { Team } from '../entities/team';
import { TEAMS } from './team.mock';

@Injectable()
export class TeamService extends GenericService {

  id = 'TeamService';

  data: Team[] = TEAMS;

  public remove(id: number): Promise<Team> {
    console.log('super delete ' + id);
    return super.remove(id);
  }

}

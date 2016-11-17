import { Injectable } from '@angular/core';

import { GenericService }   from '../shared/service/generic-service';

import { Player } from '../entities/player';
import { PLAYERS } from './player.mock';

@Injectable()
export class PlayerService extends GenericService {

  id = "PlayerService";

  data = PLAYERS;

  public remove(id: number): Promise<Player> {
    console.log('super delete ' + id);
    return super.remove(id);
  }

}

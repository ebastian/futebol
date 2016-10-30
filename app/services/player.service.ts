import { Injectable } from '@angular/core';

import { Player } from '../entities/player';
import { PLAYERS } from './player.mock';

@Injectable()
export class PlayerService {

  getPlayers(): Promise<Player[]> {
    return Promise.resolve(PLAYERS);
  }
}

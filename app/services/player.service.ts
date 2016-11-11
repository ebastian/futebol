import { Injectable } from '@angular/core';

import { GenericService }   from '../shared/service/generic-service';

import { Player } from '../entities/player';
import { PLAYERS } from './player.mock';

@Injectable()
export class PlayerService extends GenericService {
  
  data = PLAYERS;
}

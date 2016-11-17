import { Injectable } from '@angular/core';

import { GenericService }   from '../shared/service/generic-service';

import { Game } from '../entities/game';

@Injectable()
export class GameService extends GenericService {

  id = "GameService";

  data = [];
}

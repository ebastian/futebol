import { Injectable } from '@angular/core';

import { GenericService }   from '../shared/service/generic-service';

import { Place } from '../entities/place';
import { PLACES } from './place.mock';

@Injectable()
export class PlaceService extends GenericService {

  data = PLACES;

  public remove(id: number): Promise<Place[]> {
    //fazer algo antes de remover
    return super.remove(id);
  }
}

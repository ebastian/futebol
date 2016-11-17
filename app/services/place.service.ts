import { Injectable } from '@angular/core';

import { GenericService }   from '../shared/service/generic-service';

import { Place } from '../entities/place';
import { PLACES } from './place.mock';

@Injectable()
export class PlaceService extends GenericService {

  id = 'PlaceService';

  data = PLACES;

  public remove(id: number): Promise<Place> {
    console.log('not deletin places ' + id);
    return null;
  }

  public save(item:Place):void {
    console.log('super.save' + JSON.stringify(item));
    super.save(item);
  }
}

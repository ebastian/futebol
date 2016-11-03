import { Injectable } from '@angular/core';

import { Place } from '../entities/place';
import { PLACES } from './place.mock';

@Injectable()
export class PlaceService {

  getPlaces(): Promise<Place[]> {
    return Promise.resolve(PLACES);
  }
}

import { Injectable } from '@angular/core';

import { Place } from '../entities/place';
import { PLACES } from './place.mock';

@Injectable()
export class PlaceService {

  getPlaces(): Promise<Place[]> {
    return Promise.resolve(PLACES);
  }

  save(place:Place):void {
    if(place.id === undefined || place.id === null) {
      place.id = PLACES[PLACES.length-1].id + 1;
      PLACES.push(place);
      console.log("Adicionou " + place.id);
    } else {
      this.getPlaceIndex(place.id).then(
        index => PLACES[index] = place
      );
    }
  }

  getPlace(id: number): Promise<Place> {
    return this.getPlaces().then(places => places.find(place => place.id === id));
  }

  getPlaceIndex(id: number): Promise<number> {
    return this.getPlaces().then(places => places.findIndex(place => place.id === id));
  }

  remove(id: number): Promise<Place[]> {
    return this.getPlaceIndex(id).then(index => this.getPlaces().then(places => places.splice(index, 1)));
  }
}

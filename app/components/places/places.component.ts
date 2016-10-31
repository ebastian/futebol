import { Component, OnInit } from '@angular/core';

import { Place } from '../../entities/place';
import { PlaceService } from '../../services/place.service';

@Component({
  template: `
    <eb-list-header [title]="'Estabelecimentos'" [formpath]="'place'"></eb-list-header>
    <eb-registry-list [columns]="columns" [data]="places"></eb-registry-list>
  `,
  providers: [
    PlaceService
  ]
})

export class PlacesComponent implements OnInit {

  places: Place[];

  columns = [
    {
      field: "id",
      description: "Id"
    },
    {
      field: "name",
      description: "Nome"
    },
    {
      field: "address",
      description: "Endereço"
    },
    {
      field: "price",
      description: "Preço"
    }
  ];

  constructor(
    private placeService:PlaceService
  ) {

  }

  ngOnInit():void {
    this.getPlaces();
  }

  getPlaces():void {
     this.placeService.getPlaces().then(places => this.places = places);
  }
}

import { Component, OnInit } from '@angular/core';

import { Place } from '../../entities/place';
import { PlaceService } from '../../services/place.service';

@Component({
  template: `
    <eb-list-screen
      [title]="'Estabelecimentos'"
      [columns]="columns"
      [data]="places"
      [formpath]="'place'"
      (onDelete)="delete($event)">
    </eb-list-screen>
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
      field: "description",
      description: "Descrição"
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

  delete(id: number):void {
    this.placeService.remove(id);
  }
}

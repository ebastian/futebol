import { Component, OnInit } from '@angular/core';

import { Place } from '../../entities/place';
import { PlaceService } from '../../services/place.service';

@Component({
  template: `
    <eb-form-header [title]="'Estabelecimento'" [listpath]="'places'"></eb-form-header>
    <eb-registry-form [listpath]="'places'">
      <div class="form-group">
        <label for="inputName">Nome</label>
        <input id="inputName" class="form-control" placeholder="nome" required="" autofocus="">
      </div>
      <div class="form-group">
        <label for="inputName">Descrição</label>
        <input id="inputName" class="form-control" placeholder="descrição" required="" autofocus="">
      </div>
      <div class="form-group">
        <label for="inputName">Preço</label>
        <input id="inputName" class="form-control" placeholder="preço" required="" autofocus="">
      </div>
    </eb-registry-form>
  `,
  providers: [
    PlaceService
  ]
})

export class PlaceComponent implements OnInit {

  place: Place;

  constructor(
    private placeService:PlaceService
  ) {  }

  ngOnInit():void {

  }
}

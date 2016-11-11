import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';

import { Place } from '../../entities/place';
import { PlaceService } from '../../services/place.service';

@Component({
  template: `
    <eb-form-screen [title]="'Estabelecimento'" [listpath]="'places'" [registry]="place" (onSave)="save()" (onDelete)="delete()">
      <div class="form-group">
        <label for="inputName">Nome</label>
        <input id="inputName" class="form-control" placeholder="nome" required="" autofocus="" [(ngModel)]="place.name">
      </div>
      <div class="form-group">
        <label for="inputDescription">Descrição</label>
        <input id="inputDescription" class="form-control" placeholder="descrição" required="" autofocus="" [(ngModel)]="place.description">
      </div>
      <div class="form-group">
        <label for="inputAddress">Endereço</label>
        <input id="inputAddress" class="form-control" placeholder="endereço" required="" autofocus="" [(ngModel)]="place.address">
      </div>
      <div class="form-group">
        <label for="inputPrice">Preço</label>
        <input id="inputPrice" class="form-control" placeholder="preço" required="" autofocus="" [(ngModel)]="place.price">
      </div>
    </eb-form-screen>
  `,
  providers: [
    PlaceService
  ]
})

export class PlaceComponent implements OnInit {

  place: Place = new Place();

  constructor(
    private placeService:PlaceService,
    private route: ActivatedRoute,
  ) {  }

  ngOnInit():void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      if(!isNaN(id)) {
        this.placeService.getItem(id).then(place => this.place = place as Place);
      }
    });
  }

  save():void {
    this.placeService.save(this.place);
  }

  delete():void {
    this.placeService.remove(this.place.id);
  }

}

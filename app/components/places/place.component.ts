import { Inject, Component, OnInit, AfterContentInit } from '@angular/core';
import { ActivatedRoute }   from '@angular/router';
import { Router } from '@angular/router';

import { FormScreenComponent } from '../../shared/registryform/form-screen.component';

import { Place } from '../../entities/place';
import { PlaceService } from '../../services/place.service';

@Component({
  template: `
    <!--<eb-form-screen [title]="'Estabelecimento'" [listpath]="'places'"  [registry]="place" (onSave)="save()" (onDelete)="delete()">-->
    <eb-form-header [title]="'Estabelecimento'" [listpath]="'places'"></eb-form-header>
    <eb-registry-form  #regForm [registry]="registry" (onSave)="save($event)" (onDelete)="delete($event)" (onCancel)="cancel($event)">
      <div class="form-group">
        <label for="inputName">Nome</label>
        <input id="inputName" class="form-control" placeholder="nome" required="" autofocus="" [(ngModel)]="registry.name">
      </div>
      <div class="form-group">
        <label for="inputDescription">Descrição</label>
        <input id="inputDescription" class="form-control" placeholder="descrição" required="" autofocus="" [(ngModel)]="registry.description">
      </div>
      <div class="form-group">
        <label for="inputAddress">Endereço</label>
        <input id="inputAddress" class="form-control" placeholder="endereço" required="" autofocus="" [(ngModel)]="registry.address">
      </div>
      <div class="form-group">
        <label for="inputPrice">Preço</label>
        <input id="inputPrice" class="form-control" placeholder="preço" required="" autofocus="" [(ngModel)]="registry.price">
      </div>
    </eb-registry-form>
    <!--</eb-form-screen>-->
  `,
  providers: [
    PlaceService
  ]
})

export class PlaceComponent extends FormScreenComponent {

  constructor(
    @Inject(ActivatedRoute) route: ActivatedRoute,
    @Inject(Router) router: Router,
    @Inject(PlaceService) placeService:PlaceService
  ) {
     super(route, router, placeService);
     this.registry = new Place();
     this.listpath = 'places';
  }

}

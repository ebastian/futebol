import { Inject, Component, AfterContentInit } from '@angular/core';
import { Router } from '@angular/router';

import { ListScreenComponent } from '../../shared/registrylist/list-screen.component';

import { Place } from '../../entities/place';
import { PlaceService } from '../../services/place.service';

@Component({
  templateUrl: 'app/shared/registrylist/list-screen.template.html',
  providers: [
    PlaceService
  ]
})

export class PlacesComponent extends ListScreenComponent implements AfterContentInit  {

  title="Estabelecimentos";
  formpath="place";
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
    @Inject(Router) router: Router,
    @Inject(PlaceService) placeService:PlaceService
  ) {
     super(router, placeService);
  }

}

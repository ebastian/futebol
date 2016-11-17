import { Inject, Component } from '@angular/core';
import { Router } from '@angular/router';

import { ListScreenComponent } from '../../shared/registrylist/list-screen.component';

import { Game } from '../../entities/game';
import { GameService } from '../../services/game.service';

@Component({
  templateUrl: 'app/shared/registrylist/list-screen.template.html',
  providers: [
    GameService
  ]
})

export class GamesComponent extends ListScreenComponent  {

  title="Jogos";
  formpath="game";
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
      field: "type",
      description: "Tipo"
    }
  ];

  constructor(
    @Inject(Router) router: Router,
    @Inject(GameService) gameService:GameService
  ) {
     super(router, gameService);
  }

}

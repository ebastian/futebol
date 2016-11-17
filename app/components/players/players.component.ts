import { Inject, Component } from '@angular/core';
import { Router } from '@angular/router';

import { ListScreenComponent } from '../../shared/registrylist/list-screen.component';

import { Player } from '../../entities/player';
import { PlayerService } from '../../services/player.service';

@Component({
  templateUrl: 'app/shared/registrylist/list-screen.template.html',
  providers: [
    PlayerService
  ]
})

export class PlayersComponent extends ListScreenComponent  {

  title="Jogadores";
  formpath="player";
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
      field: "email",
      description: "E-mail"
    },
    {
      field: "rating",
      description: "Rating"
    }
  ];

  constructor(
    @Inject(Router) router: Router,
    @Inject(PlayerService) playerService:PlayerService
  ) {
     super(router, playerService);
  }

}

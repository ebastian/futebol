import { Inject, Component, AfterContentInit } from '@angular/core';
import { Router } from '@angular/router';

import { ListScreenComponent } from '../../shared/registrylist/list-screen.component';

import { Team } from '../../entities/team';
import { TeamService } from '../../services/team.service';

@Component({
  templateUrl: 'app/shared/registrylist/list-screen.template.html',
  providers: [
    TeamService
  ]
})

export class TeamsComponent extends ListScreenComponent implements AfterContentInit  {

  title="Times";
  formpath="team";
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
      field: "players",
      description: "Jogadores"
    }
  ];

  constructor(
    @Inject(Router) router: Router,
    @Inject(TeamService) teamService:TeamService
  ) {
     super(router, teamService);
  }

}

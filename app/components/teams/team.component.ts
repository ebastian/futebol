import { Inject, Component, OnInit, AfterContentInit } from '@angular/core';
import { ActivatedRoute }   from '@angular/router';
import { Router } from '@angular/router';

import { FormScreenComponent } from '../../shared/registryform/form-screen.component';

import { Team } from '../../entities/team';
import { TeamService } from '../../services/team.service';

@Component({
  template: `
    <!--<eb-form-screen [title]="'Time'" [listpath]="'teams'" [registry]="team" (onSave)="save()" (onDelete)="delete()">-->
    <eb-form-header [title]="'Time'" [listpath]="'teams'"></eb-form-header>
    <eb-registry-form [registry]="registry" (onSave)="save($event)" (onDelete)="delete($event)" (onCancel)="cancel($event)">
      <div class="form-group col-md-6">
        <label for="inputName">Nome</label>
        <input id="inputName" class="form-control" placeholder="nome" required="" autofocus=""  [(ngModel)]="registry.name">
      </div>
      <div class="form-group col-md-6">
        <label for="inputPassword">Tipo</label>
        <input id="inputPassword" class="form-control" placeholder="tipo" required=""  [(ngModel)]="registry.type">
      </div>
      <div class="form-group col-md-12">
        <label for="inputDesc">Descrição</label>
        <textarea id="inputDesc" class="form-control" placeholder="descrição" required="" autofocus=""  [(ngModel)]="registry.description"></textarea>
      </div>
    </eb-registry-form>
    <!--</eb-form-screen>-->
  `,
  providers: [
    TeamService
  ]
})

export class TeamComponent extends FormScreenComponent {

  constructor(
    @Inject(ActivatedRoute) route: ActivatedRoute,
    @Inject(Router) router: Router,
    @Inject(TeamService) teamService:TeamService
  ) {
    super(route, router, teamService);
    this.registry = new Team();
    this.listpath = 'teams';
  }

}

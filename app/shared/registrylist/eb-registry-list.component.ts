import { Component, OnInit } from '@angular/core';

import { Entity } from '../entity/entity';

@Component({
  selector: 'eb-registry-list',
  template: `
    <div class="container">
      <div class='container-fluid'>
        <table class='table table-hover table-striped'>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Jogadores</th>
            <th>Ações</th>
          </tr>
          <tr *ngFor="let team of teams">
            <td>{{team.id}}</td>
            <td>{{team.name}}</td>
            <td>{{team.description}}</td>
            <td>{{team.players.length}}</td>
            <td>
              <button (click)='view($event, team)'>
                <span class='glyphicon glyphicon-eye-open' aria-hidden='true'></span>
              </button>
              <button (click)='edit($event, team)'>
                <span class='glyphicon glyphicon-pencil' aria-hidden='true'></span>
              </button>
              <button (click)='remove($event, team)'>
                <span class='glyphicon glyphicon-remove' aria-hidden='true'></span>
              </button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  `
})

export class RegistryListComponent implements OnInit {

  teams = [];

  constructor(

  ) { }

  ngOnInit():void {
  }

  selectGroup(reg: Object):void {
    console.log('select ' + reg["id"]);
    //this.selectedGroup = group;
  }

  view(event, reg: Object):void {
    //event.stopPropagation();
    console.log('view: ' + reg["id"]);
    //this.router.navigate([this.crudpath + '/' + group.id]);
  }

  edit(event, reg: Object):void {
    //event.stopPropagation();
    console.log('edit ' + reg["id"]);
    //this.router.navigate([this.crudpath + '/' + group.id]);
  }

  remove(event, reg: Object):void {
    //event.stopPropagation();
    console.log('remove ' + reg["id"]);
    //this.router.navigate([this.crudpath + '/' + group.id]);
  }
}

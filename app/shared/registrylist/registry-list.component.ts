import { Component, OnInit, Input } from "@angular/core";

import { Entity } from "../entity/entity";

@Component({
  selector: "eb-registry-list",
  template: `
    <div class="container">
      <div class="container-fluid">
        <table class="table table-hover table-striped">
          <tr>
            <th *ngFor="let column of columns">{{column.description}}</th>
            <th>Ações</th>
          </tr>
          <tr *ngFor="let reg of data" [class.info]="selectedRegistry == reg">
            <td *ngFor="let column of columns" (click)="selectRegistry(reg)">{{reg[column.field]}}</td>
            <td>
              <button (click)="view($event, team)">
                <span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span>
              </button>
              <button (click)="edit($event, team)">
                <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>
              </button>
              <button (click)="remove($event, team)">
                <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
              </button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  `
})

export class RegistryListComponent implements OnInit {

  @Input()
  data = [];

  @Input()
  columns = [];

  selectedRegistry = undefined;

  constructor(

  ) { }

  ngOnInit():void {
    if(this.columns == null || this.columns == undefined || this.columns.length < 1) {
      this.columns = [
        {
          field: "id",
          description: "Id"
        },
        {
          field: "name",
          description: "Nome"
        }
      ];
    }
  }

  selectRegistry(reg: Object):void {
    console.log("select " + reg["id"]);
    this.selectedRegistry = reg;
  }

  view(event, reg: Object):void {
    //event.stopPropagation();
    console.log("view: " + reg["id"]);
    //this.router.navigate([this.crudpath + "/" + group.id]);
  }

  edit(event, reg: Object):void {
    //event.stopPropagation();
    console.log("edit " + reg["id"]);
    //this.router.navigate([this.crudpath + "/" + group.id]);
  }

  remove(event, reg: Object):void {
    //event.stopPropagation();
    console.log("remove " + reg["id"]);
    //this.router.navigate([this.crudpath + "/" + group.id]);
  }
}

import { Component, OnInit, Input } from "@angular/core";

import { Entity } from "../entity/entity";

@Component({
  selector: "eb-registry-list",
  template: `
    <div>
      <div>
        <div class="panel panel-default">
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
        <nav aria-label="...">
          <ul class="pagination">
            <li class="disabled"><a href="#" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a></li>
            <li class="active"><a href="#">1</a></li>
            <li><a href="#">2</a></li>
            <li><a href="#">3</a></li>
            <li><a href="#">4</a></li>
            <li><a href="#">5</a></li>
            <li><a href="#" aria-label="Next"><span aria-hidden="true">&laquo;</span></a></li>
          </ul>
        </nav>
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

import { Component, OnInit, EventEmitter, Input, Output } from "@angular/core";
import { Router } from '@angular/router';

import { Entity } from "../entity/entity";

@Component({
  selector: "eb-registry-list",
  template: `
    <div>
      <div class="panel panel-default">
        <table class="table table-hover table-striped">
          <tr>
            <th *ngFor="let column of columns">{{column.description}}</th>
            <th>Ações</th>
          </tr>
          <tr *ngFor="let reg of data" [class.info]="selectedRegistry === reg" (click)="selectRegistry($event, reg)">
            <td *ngFor="let column of columns">{{reg[column.field]}}</td>
            <td>
              <!--
              <button (click)="view($event, reg)">
                <span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span>
              </button>
              -->
              <button (click)="edit($event, reg)">
                <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>
              </button>
              <button data-toggle="modal" data-target="#removeConfirmationModal" (click)="selectRegistry($event, reg)">
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

    <div *ngIf="selectedRegistry !== undefined" class="modal fade" id="removeConfirmationModal" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">Confirmar remoção</h4>
          </div>
          <div class="modal-body">
            <p>Deseja remover o registro {{selectedRegistry?.id}}?</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal" (click)="delete($event)">Sim</button>
            <button type="button" class="btn btn-default" data-dismiss="modal">Não</button>
          </div>
        </div>
      </div>
    </div>
  `
})

export class RegistryListComponent implements OnInit {

  @Input()
  data = [];

  @Input()
  columns = [];

  @Input()
  formpath: string = '';

  @Output()
  onDelete = new EventEmitter();

  selectedRegistry: Entity = undefined;

  constructor(
      private router: Router,
  ) { }

  ngOnInit():void {
    if(this.columns == null || this.columns == undefined || this.columns.length < 1) {
      this.columns = [
        {
          field: "id",
          description: "Id"
        }
      ];
    }
  }

  selectRegistry(event, reg: Entity):void {
    this.selectedRegistry = reg;
  }

  edit(event, reg: Entity):void {
    console.log(reg.id);
    this.selectRegistry(event, reg);
    this.router.navigate([this.formpath + "/" + reg.id]);
  }

  delete(event):void {
    this.onDelete.next(this.selectedRegistry.id);
  }
}

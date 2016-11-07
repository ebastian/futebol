import { Component, OnInit, EventEmitter, Input, Output } from "@angular/core";
import { Router } from '@angular/router';

import { Entity } from "../entity/entity";

@Component({
  selector: "eb-list-screen",
  template: `
    <eb-list-header [title]="title" [formpath]="formpath"></eb-list-header>
    <eb-registry-list [columns]="columns" [data]="data"  [formpath]="formpath" (onDelete)="delete($event)"></eb-registry-list>
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

export class ListScreenComponent implements OnInit {

  @Input()
  title: string = '';

  @Input()
  data = [];

  @Input()
  columns = [];

  @Input()
  formpath: string = '';

  @Output()
  onDelete = new EventEmitter();

  selectedRegistry = undefined;

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

  selectRegistry(reg: Object):void {
    console.log("select " + reg["id"]);
    this.selectedRegistry = reg;
  }

  edit(event, reg: Object):void {
    this.router.navigate([this.formpath + "/" + reg["id"]]);
  }

  delete(id: number):void {
    this.onDelete.next(id);
  }
}

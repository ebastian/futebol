import { Component, OnInit, EventEmitter, Input, Output } from "@angular/core";
//import { Router } from '@angular/router';

import { Entity } from "../entity/entity";

@Component({
  moduleId: module.id,
  selector: 'eb-registry-form',
  template: `
      <div class="container-fluid" *ngIf="busy">
        <div class="teste">
          <div class="row">
            <div>
              Carregando...
              <div class="progress">
                <div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" style="width: 100%">
                  <span class="sr-only">Carregando...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <form>
        <div [class.divdisabled]="busy">
          <ng-content></ng-content>
          <div class="form-group col-md-12">
            <button class="btn btn-success" type="button" (click)=save()>Salvar</button>
            <button class="btn btn-danger" type="button" data-toggle="modal" data-target="#removeConfirmationModal" *ngIf="registry.id != undefined">Deletar</button>
            <button class="btn" type="button" (click)=cancel()>Cancelar</button>
          </div>
        </div>
      </form>
    <div class="modal fade" id="removeConfirmationModal" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">Confirmar remoção</h4>
          </div>
          <div class="modal-body">
            <p>Deseja remover o registro {{registry?.id}}?</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal" (click)="delete($event)">Sim</button>
            <button type="button" class="btn btn-default" data-dismiss="modal">Não</button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .divdisabled
    {
      pointer-events: none;
      opacity: 0.5;
    }
    .teste {
      position: absolute;
      left: 43%;
      top: 200px;
      width: 250px;
      z-index: 1;
      background-color: #ffffff;
    }
  `]
})

export class RegistryFormComponent {

  @Input()
  registry: Entity = new Entity();

  @Output()
  onSave = new EventEmitter();

  @Output()
  onDelete = new EventEmitter();

  @Output()
  onCancel = new EventEmitter();

  public busy: boolean = false;

  constructor(
    //private router: Router
  ) { }

  save():void {
    console.log("registryform save " + JSON.stringify(this.registry));
    this.onSave.next();
  }

  delete():void {
    this.onDelete.next();
  }

  cancel():void {
    this.onCancel.next();
  }
}

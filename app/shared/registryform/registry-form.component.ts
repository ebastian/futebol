import { Component, OnInit, EventEmitter, Input, Output } from "@angular/core";
//import { Router } from '@angular/router';

@Component({
  selector: 'eb-registry-form',
  template: `
    <form>
      <ng-content></ng-content>
      <div class="form-group col-md-12">
        <button class="btn btn-success" type="button" (click)=save()>Salvar</button>
        <button class="btn btn-danger" type="button" data-toggle="modal" data-target="#removeConfirmationModal">Deletar</button>
        <button class="btn" type="button" (click)=cancel()>Cancelar</button>
      </div>
    </form>
    <div *ngIf="selectedRegistry !== undefined" class="modal fade" id="removeConfirmationModal" role="dialog">
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
  `
})

export class RegistryFormComponent {//implements OnInit {

  @Input()
  registry: Object;

  @Output()
  onSave = new EventEmitter();

  @Output()
  onDelete = new EventEmitter();

  @Output()
  onCancel = new EventEmitter();

  constructor(
    //private router: Router
  ) { }

  //ngOnInit():void { }

  save():void {
    this.onSave.next();
  }

  delete():void {
    this.onDelete.next();
  }

  cancel():void {
    this.onCancel.next();
  }
}

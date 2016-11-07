import { Component, OnInit, EventEmitter, Input, Output } from "@angular/core";
import { Router } from '@angular/router';

import { Entity } from "../entity/entity";

@Component({
  selector: "eb-form-screen",
  template: `
    <eb-form-header [title]="title" [listpath]="listpath" [registry]="registry"></eb-form-header>
    <eb-registry-form (onSave)="save($event)" (onDelete)="delete($event)" (onCancel)="cancel($event)">
      <ng-content></ng-content>
    </eb-registry-form>
  `
})

export class FormScreenComponent implements OnInit {

  @Input()
  listpath;

  @Input()
  title;

  @Input()
  registry: Object;

  @Input()
  formpath: string;

  @Output()
  onSave = new EventEmitter();

  @Output()
  onDelete = new EventEmitter();

  constructor(
    private router: Router
  ) { }

  ngOnInit():void {

  }

  save():void {
    this.onSave.next();
    this.goBack();
  }

  cancel():void {
    this.goBack();
  }

  delete():void {
    this.onDelete.next();
    this.goBack();
  }

  goBack():void {
    if(this.listpath != null && this.listpath != undefined && this.listpath != '') {
      this.router.navigate([this.listpath]);
    } else {
      console.log('Especify the listpath property');
    }
  }
}

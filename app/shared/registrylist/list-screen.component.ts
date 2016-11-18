import { Component, OnInit, EventEmitter, Input, Output, ViewChild, AfterContentInit } from "@angular/core";
import { Router } from '@angular/router';

import { ProgressBarComponent } from '../../shared/progressbar/progressbar.component';

import { Entity } from "../entity/entity";

import { GenericService } from '../../shared/service/generic-service';

@Component({
  moduleId: module.id,
  selector: "eb-list-screen",
  templateUrl: 'list-screen.template.html'
})

export class ListScreenComponent implements OnInit, AfterContentInit  {

  /*
  @ViewChild('pb')
  protected pb: ProgressBarComponent;
  */

  @Input()
  protected title: string = '';

  @Input()
  protected data = [];

  @Input()
  protected columns = [];

  @Input()
  protected formpath: string = '';

  busy: boolean = false;

  @Output()
  onDelete = new EventEmitter();

  protected selectedRegistry = undefined;

  constructor(
      protected router: Router,
      protected service: GenericService
  ) { }

  ngOnInit(): void {
    console.log("ListScreenComponent " + this.service.id);
    if(this.columns == null || this.columns == undefined || this.columns.length < 1) {
      this.columns = [
        {
          field: "id",
          description: "Id"
        }
      ];
    }
  }

  ngAfterContentInit():void {
    this.getItens();
  }

  getItens():void {
    this.busy = true;
    this.service.getItens().then(data => this.data = data).then(() => this.busy = false);
    //this.pb.show();
    //this.service.getItens().then(data => this.data = data).then(() => this.pb.hide());
  }

  selectRegistry(reg: Object): void {
    this.selectedRegistry = reg;
  }

  edit(event, reg: Object): void {
    this.router.navigate([this.formpath + "/" + reg["id"]]);
  }

  delete(id: number): void {
    this.busy = true;
    console.log('list-screen delete ' + id);
    this.service.remove(id).then(() => this.busy = false);
  }
}

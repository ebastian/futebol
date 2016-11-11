import { Component, OnInit, EventEmitter, Input, Output, ViewChild, AfterContentInit } from "@angular/core";
import { Router } from '@angular/router';

import { ProgressBarComponent } from '../../shared/progressbar/progressbar.component';

import { Entity } from "../entity/entity";

import { GenericService } from '../../shared/service/generic-service';

@Component({
  selector: "eb-list-screen",
  templateUrl: 'app/shared/registrylist/list-screen.template.html'
})

export class ListScreenComponent implements OnInit, AfterContentInit  {

  @ViewChild('pb')
  protected pb: ProgressBarComponent;

  @Input()
  protected title: string = '';

  @Input()
  protected data = [];

  @Input()
  protected columns = [];

  @Input()
  protected formpath: string = '';

  @Output()
  onDelete = new EventEmitter();

  protected selectedRegistry = undefined;

  constructor(
      protected router: Router,
      protected service: GenericService
  ) { }

  ngOnInit(): void {
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
    this.pb.show();
    this.service.getItens().then(data => this.data = data).then(() => this.pb.hide());
  }

  selectRegistry(reg: Object): void {
    this.selectedRegistry = reg;
  }

  edit(event, reg: Object): void {
    this.router.navigate([this.formpath + "/" + reg["id"]]);
  }

  delete(id: number): void {
    this.service.remove(id);
  }
}

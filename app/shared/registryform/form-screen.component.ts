import { Component, OnInit, EventEmitter, Input, Output, ViewChild, AfterContentInit } from "@angular/core";
import { ActivatedRoute, Params }   from '@angular/router';
import { Router } from '@angular/router';

import { RegistryFormComponent }   from '../../shared/registryform/registry-form.component';

import { GenericService } from '../../shared/service/generic-service';

import { Entity } from "../entity/entity";

@Component({
  template: '<h1>Form Screen</h1>',
  providers: [
    GenericService
  ]
})

export class FormScreenComponent implements AfterContentInit {

  @ViewChild('regForm')
  protected regForm: RegistryFormComponent;

  protected busy: boolean = false;

  protected listpath: string;

  protected registry: Entity = new Entity();

  @Output() onSave = new EventEmitter();

  @Output() onDelete = new EventEmitter();

  constructor(
      protected route: ActivatedRoute,
      protected router: Router,
      protected service: GenericService
  ) { }

  ngAfterContentInit():void {
    this.regForm.busy = true;
    console.log("FormScreenComponent " + this.service.id);
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      if(!isNaN(id)) {
        console.log('ngOnInit - getItem ' + id);
        this.service.getItem(id).then(registry => this.registry = registry).then(() => console.log(">> " + JSON.stringify(this.registry))).then(() => this.regForm.busy = false);
      } else {
        this.regForm.busy = false;
      }
    });
  }

  save():void {
    console.log("formscreen save" + JSON.stringify(this.registry));
    this.service.save(this.registry);
    this.onSave.next();
    this.goBack();
  }

  cancel():void {
    this.goBack();
  }

  delete():void {
    console.log("formscreen delete" + JSON.stringify(this.registry));
    this.service.remove(this.registry.id);
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

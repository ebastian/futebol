import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Entity } from "../entity/entity";

@Component({
  selector: "eb-form-header",
  template: `
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="collapse navbar-collapse">
          <div class="navbar-header">
            <div class="navbar-brand">
              <!--<span *ngIf="registry.id == null || registry.id == undefined">Incluindo</span>
              <span *ngIf="registry.id !== null && registry.id != undefined">Editando</span>-->
              <span>{{title}}</span>
              <!--<span *ngIf="registry.id !== null && registry.id != undefined">({{registry.id}})</span>-->
            </div>
            <div class="navbar-brand" style="width: 50px"></div>
          </div>
          <ul class="nav nav-pills navbar-right">
            <li><div class="navbar-text" (click)="list()">Lista</div></li>
            <li><div class="navbar-text" (click)="help()">Ajuda</div></li>
          </ul>
        </div>
      </div>
    </nav>
  `
})

export class FormHeaderComponent implements OnInit {

  @Input()
  title: string;

  @Input()
  registry: Entity = new Entity();

  @Input()
  listpath: string;

  constructor(
    private router: Router
  ) { }

  ngOnInit():void {

  }

  list():void {
    if(this.listpath != null && this.listpath != undefined && this.listpath != '') {
      this.router.navigate([this.listpath]);
    } else {
      console.log('Especify the listpath property');
    }
  }

  help():void {
    console.log("Ajuda!");
  }

}

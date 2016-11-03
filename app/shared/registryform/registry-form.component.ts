import { Component, OnInit, Input } from "@angular/core";
import { Router } from '@angular/router';

import { Entity } from "../entity/entity";

@Component({
  selector: "eb-registry-form",
  template: `
    <form>
      <ng-content></ng-content>
      <div class="form-group">
        <button class="btn" type="button" (save)=save()>Salvar</button>
        <button class="btn" type="button" (cancel)=cancel()>Cancelar</button>
      </div>
    </form>
  `
})

export class RegistryFormComponent implements OnInit {

  @Input()
  listpath;

  constructor(
    private router: Router
  ) { }

  ngOnInit():void {

  }

  save():void {

  }

  cancel():void {
    if(this.listpath != null && this.listpath != undefined && this.listpath != '') {
      this.router.navigate([this.listpath]);
    } else {
      console.log('Especify the listpath property');
    }
  }
}

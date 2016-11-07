import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: "eb-list-header",
  template: `
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="collapse navbar-collapse">
          <div class="navbar-header">
            <div class="navbar-brand">{{title}}</div>
            <div class="navbar-brand" style="width: 50px"></div>
          </div>
          <form class="navbar-form navbar-left">
            <div class="form-group">
              <button type="button" class='btn btn-primary' (click)='add()'>Adicionar</button>
              <input [(ngModel)]="searchText" [ngModelOptions]="{standalone: true}" type="text" class="form-control" placeholder="Procurar">
              <button type="button" class="btn btn-default" (click)="search()"><span class="glyphicon glyphicon-search" aria-hidden="true"></span></button>
            </div>
          </form>
          <ul class="nav navbar-nav navbar-right">
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Opções<span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><a href="#" (click)="export()">Exportar</a></li>
                <li role="separator" class="divider"></li>
                <li><a href="#" (click)="config()">Configurações</a></li>
              </ul>
            </li>
            <li><a href="#">Ajuda</a></li>
          </ul>
        </div>
      </div>
    </nav>
  `
})

export class ListHeaderComponent implements OnInit {

  @Input()
  title: string;

  @Input()
  formpath: string;

  searchText: string;

  constructor(
    private router: Router
  ) { }

  ngOnInit():void {
    console.log(this.formpath);
  }

  add():void {
    if(this.formpath != null && this.formpath != undefined && this.formpath != '') {
      this.router.navigate([this.formpath]);
    } else {
      console.log('Especify the formpath property');
    }
  }

  search():void {
    console.log("search: " + this.searchText);
  }

  help():void {
    console.log("Ajuda!");
  }

  export():void {
    console.log("Exportar!");
  }

  config():void {
    console.log("Configurações!");
  }

}

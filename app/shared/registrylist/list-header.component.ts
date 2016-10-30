import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: "eb-list-header",
  template: `
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse">
          <div class="navbar-header">
            <div class="navbar-brand">{{title}}</div>
          </div>
          <ul class="nav navbar-nav navbar-right">
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Opções<span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><a href="#">Exportar</a></li>
                <li role="separator" class="divider"></li>
                <li><a href="#">Configurações</a></li>
              </ul>
            </li>
            <li><a href="#">Ajuda</a></li>
          </ul>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
    </nav>
    <button class='btn btn-primary' (click)='add()'>Adicionar</button>
    <hr>
  `
})

export class ListHeaderComponent implements OnInit {

  @Input()
  title;

  ngOnInit():void {
    console.log(">>" + this.title);
  }

  add():void {
    console.log("add");
  }

}

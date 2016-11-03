import { Component } from '@angular/core';

@Component({
  template: `
    <h3>Perfil</h3>
    <div class="container">
      <div class="form-signin">
        <div class="form-group">
          <label for="inputName">Nome</label>
          <input id="inputName" class="form-control" placeholder="nome" required="" autofocus="">
        </div>
        <div class="form-group">
          <label for="inputEmail">E-mail</label>
          <input id="inputEmail" class="form-control" placeholder="usuário" required="" autofocus="" type="email">
        </div>
        <div class="form-group">
          <label for="inputPassword">Senha</label>
          <input id="inputPassword" class="form-control" placeholder="senha" required="" type="password">
        </div>
        <div class="form-group">
          <button class="btn" type="button">Salvar</button>
          <button class="btn" type="button">Cancelar</button>
        </div>
      </div>
    </div>
  `
})

export class PerfilComponent { }

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var PerfilComponent = (function () {
    function PerfilComponent() {
    }
    PerfilComponent = __decorate([
        core_1.Component({
            template: "\n    <h3>Perfil</h3>\n    <div class=\"container\">\n      <div class=\"form-signin\">\n        <div class=\"form-group\">\n          <label for=\"inputName\">Nome</label>\n          <input id=\"inputName\" class=\"form-control\" placeholder=\"nome\" required=\"\" autofocus=\"\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"inputEmail\">E-mail</label>\n          <input id=\"inputEmail\" class=\"form-control\" placeholder=\"usu\u00E1rio\" required=\"\" autofocus=\"\" type=\"email\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"inputPassword\">Senha</label>\n          <input id=\"inputPassword\" class=\"form-control\" placeholder=\"senha\" required=\"\" type=\"password\">\n        </div>\n        <div class=\"form-group\">\n          <button class=\"btn\" type=\"button\">Salvar</button>\n          <button class=\"btn\" type=\"button\">Cancelar</button>\n        </div>\n      </div>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], PerfilComponent);
    return PerfilComponent;
}());
exports.PerfilComponent = PerfilComponent;
//# sourceMappingURL=perfil.component.js.map
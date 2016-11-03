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
var NavComponent = (function () {
    function NavComponent() {
    }
    NavComponent = __decorate([
        core_1.Component({
            selector: 'eb-nav',
            template: "\n    <nav class=\"navbar navbar-default\">\n      <div class=\"container\">\n        <div class=\"navbar-header\">\n          <a class=\"navbar-brand\" href=\"#\" routerLink=\"/timeline\">Futeaboleiro</a>\n          <a class=\"navbar-brand\" href=\"#\" routerLink=\"/perfil\">Perfil</a>\n          <a class=\"navbar-brand\" href=\"#\" routerLink=\"/players\">Jogadores</a>\n          <a class=\"navbar-brand\" href=\"#\" routerLink=\"/teams\">Times</a>\n          <a class=\"navbar-brand\" href=\"#\" routerLink=\"/games\">Jogos</a>\n          <a class=\"navbar-brand\" href=\"#\" routerLink=\"/places\">Estabelecimentos</a>\n        </div>\n      </div>\n    </nav>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], NavComponent);
    return NavComponent;
}());
exports.NavComponent = NavComponent;
//# sourceMappingURL=nav.component.js.map
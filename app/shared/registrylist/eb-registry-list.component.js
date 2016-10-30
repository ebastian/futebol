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
var RegistryListComponent = (function () {
    function RegistryListComponent() {
        this.teams = [];
    }
    RegistryListComponent.prototype.ngOnInit = function () {
    };
    RegistryListComponent.prototype.selectGroup = function (reg) {
        console.log('select ' + reg["id"]);
        //this.selectedGroup = group;
    };
    RegistryListComponent.prototype.view = function (event, reg) {
        //event.stopPropagation();
        console.log('view: ' + reg["id"]);
        //this.router.navigate([this.crudpath + '/' + group.id]);
    };
    RegistryListComponent.prototype.edit = function (event, reg) {
        //event.stopPropagation();
        console.log('edit ' + reg["id"]);
        //this.router.navigate([this.crudpath + '/' + group.id]);
    };
    RegistryListComponent.prototype.remove = function (event, reg) {
        //event.stopPropagation();
        console.log('remove ' + reg["id"]);
        //this.router.navigate([this.crudpath + '/' + group.id]);
    };
    RegistryListComponent = __decorate([
        core_1.Component({
            selector: 'eb-registry-list',
            template: "\n    <div class=\"container\">\n      <div class='container-fluid'>\n        <table class='table table-hover table-striped'>\n          <tr>\n            <th>#</th>\n            <th>Nome</th>\n            <th>Descri\u00E7\u00E3o</th>\n            <th>Jogadores</th>\n            <th>A\u00E7\u00F5es</th>\n          </tr>\n          <tr *ngFor=\"let team of teams\">\n            <td>{{team.id}}</td>\n            <td>{{team.name}}</td>\n            <td>{{team.description}}</td>\n            <td>{{team.players.length}}</td>\n            <td>\n              <button (click)='view($event, team)'>\n                <span class='glyphicon glyphicon-eye-open' aria-hidden='true'></span>\n              </button>\n              <button (click)='edit($event, team)'>\n                <span class='glyphicon glyphicon-pencil' aria-hidden='true'></span>\n              </button>\n              <button (click)='remove($event, team)'>\n                <span class='glyphicon glyphicon-remove' aria-hidden='true'></span>\n              </button>\n            </td>\n          </tr>\n        </table>\n      </div>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], RegistryListComponent);
    return RegistryListComponent;
}());
exports.RegistryListComponent = RegistryListComponent;
//# sourceMappingURL=eb-registry-list.component.js.map
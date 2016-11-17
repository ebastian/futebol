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
var core_1 = require("@angular/core");
var router_1 = require('@angular/router');
var RegistryListComponent = (function () {
    function RegistryListComponent(router) {
        this.router = router;
        this.data = [];
        this.columns = [];
        this.formpath = '';
        this.onDelete = new core_1.EventEmitter();
        this.selectedRegistry = undefined;
    }
    RegistryListComponent.prototype.ngOnInit = function () {
        if (this.columns == null || this.columns == undefined || this.columns.length < 1) {
            this.columns = [
                {
                    field: "id",
                    description: "Id"
                }
            ];
        }
    };
    RegistryListComponent.prototype.selectRegistry = function (event, reg) {
        this.selectedRegistry = reg;
    };
    RegistryListComponent.prototype.edit = function (event, reg) {
        this.selectRegistry(event, reg);
        this.router.navigate([this.formpath + "/" + reg.id]);
    };
    RegistryListComponent.prototype.delete = function (event) {
        this.onDelete.next(this.selectedRegistry.id);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], RegistryListComponent.prototype, "data", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], RegistryListComponent.prototype, "columns", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], RegistryListComponent.prototype, "formpath", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], RegistryListComponent.prototype, "onDelete", void 0);
    RegistryListComponent = __decorate([
        core_1.Component({
            selector: "eb-registry-list",
            template: "\n    <div>\n      <div class=\"panel panel-default\">\n        <table class=\"table table-hover table-striped\" *ngIf=\"data.length > 0\">\n          <tr>\n            <th *ngFor=\"let column of columns\">{{column.description}}</th>\n            <th>A\u00E7\u00F5es</th>\n          </tr>\n          <tr *ngFor=\"let reg of data\" [class.info]=\"selectedRegistry === reg\" (click)=\"selectRegistry($event, reg)\">\n            <td *ngFor=\"let column of columns\">{{reg[column.field]}}</td>\n            <td>\n              <!--\n              <button (click)=\"view($event, reg)\">\n                <span class=\"glyphicon glyphicon-eye-open\" aria-hidden=\"true\"></span>\n              </button>\n              -->\n              <button (click)=\"edit($event, reg)\">\n                <span class=\"glyphicon glyphicon-pencil\" aria-hidden=\"true\"></span>\n              </button>\n              <button data-toggle=\"modal\" data-target=\"#removeConfirmationModal\" (click)=\"selectRegistry($event, reg)\">\n                <span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span>\n              </button>\n            </td>\n          </tr>\n        </table>\n        <div *ngIf=\"data.length === 0\">\n          <br>&nbsp;&nbsp;&nbsp;&nbsp;Nenhum registro encontrado.<br><br>\n        </div>\n      </div>\n\n      <nav aria-label=\"...\">\n        <ul class=\"pagination\">\n          <li class=\"disabled\"><a href=\"#\" aria-label=\"Previous\"><span aria-hidden=\"true\">&laquo;</span></a></li>\n          <li class=\"active\"><a href=\"#\">1</a></li>\n          <li><a href=\"#\">2</a></li>\n          <li><a href=\"#\">3</a></li>\n          <li><a href=\"#\">4</a></li>\n          <li><a href=\"#\">5</a></li>\n          <li><a href=\"#\" aria-label=\"Next\"><span aria-hidden=\"true\">&laquo;</span></a></li>\n        </ul>\n      </nav>\n    </div>\n\n    <div *ngIf=\"selectedRegistry !== undefined\" class=\"modal fade\" id=\"removeConfirmationModal\" role=\"dialog\">\n      <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n            <h4 class=\"modal-title\">Confirmar remo\u00E7\u00E3o</h4>\n          </div>\n          <div class=\"modal-body\">\n            <p>Deseja remover o registro {{selectedRegistry?.id}}?</p>\n          </div>\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"delete($event)\">Sim</button>\n            <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">N\u00E3o</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], RegistryListComponent);
    return RegistryListComponent;
}());
exports.RegistryListComponent = RegistryListComponent;
//# sourceMappingURL=registry-list.component.js.map
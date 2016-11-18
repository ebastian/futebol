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
//import { Router } from '@angular/router';
var entity_1 = require("../entity/entity");
var RegistryFormComponent = (function () {
    function RegistryFormComponent() {
        this.registry = new entity_1.Entity();
        this.onSave = new core_1.EventEmitter();
        this.onDelete = new core_1.EventEmitter();
        this.onCancel = new core_1.EventEmitter();
        this.busy = false;
    }
    RegistryFormComponent.prototype.save = function () {
        console.log("registryform save " + JSON.stringify(this.registry));
        this.onSave.next();
    };
    RegistryFormComponent.prototype.delete = function () {
        this.onDelete.next();
    };
    RegistryFormComponent.prototype.cancel = function () {
        this.onCancel.next();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', entity_1.Entity)
    ], RegistryFormComponent.prototype, "registry", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], RegistryFormComponent.prototype, "onSave", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], RegistryFormComponent.prototype, "onDelete", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], RegistryFormComponent.prototype, "onCancel", void 0);
    RegistryFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'eb-registry-form',
            template: "\n      <div class=\"container-fluid\" *ngIf=\"busy\">\n        <div class=\"teste\">\n          <div class=\"row\">\n            <div>\n              Carregando...\n              <div class=\"progress\">\n                <div class=\"progress-bar progress-bar-striped active\" role=\"progressbar\" aria-valuenow=\"45\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 100%\">\n                  <span class=\"sr-only\">Carregando...</span>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <form>\n        <div [class.divdisabled]=\"busy\">\n          <ng-content></ng-content>\n          <div class=\"form-group col-md-12\">\n            <button class=\"btn btn-success\" type=\"button\" (click)=save()>Salvar</button>\n            <button class=\"btn btn-danger\" type=\"button\" data-toggle=\"modal\" data-target=\"#removeConfirmationModal\" *ngIf=\"registry.id != undefined\">Deletar</button>\n            <button class=\"btn\" type=\"button\" (click)=cancel()>Cancelar</button>\n          </div>\n        </div>\n      </form>\n    <div class=\"modal fade\" id=\"removeConfirmationModal\" role=\"dialog\">\n      <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n            <h4 class=\"modal-title\">Confirmar remo\u00E7\u00E3o</h4>\n          </div>\n          <div class=\"modal-body\">\n            <p>Deseja remover o registro {{registry?.id}}?</p>\n          </div>\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"delete($event)\">Sim</button>\n            <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">N\u00E3o</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  ",
            styles: ["\n    .divdisabled\n    {\n      pointer-events: none;\n      opacity: 0.5;\n    }\n    .teste {\n      position: absolute;\n      left: 43%;\n      top: 200px;\n      width: 250px;\n      z-index: 1;\n      background-color: #ffffff;\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], RegistryFormComponent);
    return RegistryFormComponent;
}());
exports.RegistryFormComponent = RegistryFormComponent;
//# sourceMappingURL=registry-form.component.js.map
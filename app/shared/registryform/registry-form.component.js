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
var RegistryFormComponent = (function () {
    function RegistryFormComponent() {
        this.onSave = new core_1.EventEmitter();
        this.onDelete = new core_1.EventEmitter();
        this.onCancel = new core_1.EventEmitter();
    }
    //ngOnInit():void { }
    RegistryFormComponent.prototype.save = function () {
        this.onSave.next();
    };
    RegistryFormComponent.prototype.delete = function () {
        this.onDelete.next();
    };
    RegistryFormComponent.prototype.cancel = function () {
        this.onCancel.next();
    };
    __decorate([
        //implements OnInit {
        core_1.Input(), 
        __metadata('design:type', Object)
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
            selector: 'eb-registry-form',
            template: "\n    <form>\n      <ng-content></ng-content>\n      <div class=\"form-group col-md-12\">\n        <button class=\"btn btn-success\" type=\"button\" (click)=save()>Salvar</button>\n        <button class=\"btn btn-danger\" type=\"button\" data-toggle=\"modal\" data-target=\"#removeConfirmationModal\">Deletar</button>\n        <button class=\"btn\" type=\"button\" (click)=cancel()>Cancelar</button>\n      </div>\n    </form>\n    <div *ngIf=\"selectedRegistry !== undefined\" class=\"modal fade\" id=\"removeConfirmationModal\" role=\"dialog\">\n      <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n            <h4 class=\"modal-title\">Confirmar remo\u00E7\u00E3o</h4>\n          </div>\n          <div class=\"modal-body\">\n            <p>Deseja remover o registro {{registry?.id}}?</p>\n          </div>\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"delete($event)\">Sim</button>\n            <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">N\u00E3o</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], RegistryFormComponent);
    return RegistryFormComponent;
}());
exports.RegistryFormComponent = RegistryFormComponent;
//# sourceMappingURL=registry-form.component.js.map
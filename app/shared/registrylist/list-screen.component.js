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
var ListScreenComponent = (function () {
    function ListScreenComponent(router) {
        this.router = router;
        this.title = '';
        this.data = [];
        this.columns = [];
        this.formpath = '';
        this.onDelete = new core_1.EventEmitter();
        this.selectedRegistry = undefined;
    }
    ListScreenComponent.prototype.ngOnInit = function () {
        if (this.columns == null || this.columns == undefined || this.columns.length < 1) {
            this.columns = [
                {
                    field: "id",
                    description: "Id"
                }
            ];
        }
    };
    ListScreenComponent.prototype.selectRegistry = function (reg) {
        console.log("select " + reg["id"]);
        this.selectedRegistry = reg;
    };
    ListScreenComponent.prototype.edit = function (event, reg) {
        this.router.navigate([this.formpath + "/" + reg["id"]]);
    };
    ListScreenComponent.prototype.delete = function (id) {
        this.onDelete.next(id);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ListScreenComponent.prototype, "title", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ListScreenComponent.prototype, "data", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ListScreenComponent.prototype, "columns", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ListScreenComponent.prototype, "formpath", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ListScreenComponent.prototype, "onDelete", void 0);
    ListScreenComponent = __decorate([
        core_1.Component({
            selector: "eb-list-screen",
            template: "\n    <eb-list-header [title]=\"title\" [formpath]=\"formpath\"></eb-list-header>\n    <eb-registry-list [columns]=\"columns\" [data]=\"data\"  [formpath]=\"formpath\" (onDelete)=\"delete($event)\"></eb-registry-list>\n    <div *ngIf=\"selectedRegistry !== undefined\" class=\"modal fade\" id=\"removeConfirmationModal\" role=\"dialog\">\n      <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n            <h4 class=\"modal-title\">Confirmar remo\u00E7\u00E3o</h4>\n          </div>\n          <div class=\"modal-body\">\n            <p>Deseja remover o registro {{selectedRegistry?.id}}?</p>\n          </div>\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"delete($event)\">Sim</button>\n            <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">N\u00E3o</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], ListScreenComponent);
    return ListScreenComponent;
}());
exports.ListScreenComponent = ListScreenComponent;
//# sourceMappingURL=list-screen.component.js.map
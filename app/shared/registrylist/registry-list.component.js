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
var RegistryListComponent = (function () {
    function RegistryListComponent() {
        this.data = [];
        this.columns = [];
        this.selectedRegistry = undefined;
    }
    RegistryListComponent.prototype.ngOnInit = function () {
        if (this.columns == null || this.columns == undefined || this.columns.length < 1) {
            this.columns = [
                {
                    field: "id",
                    description: "Id"
                },
                {
                    field: "name",
                    description: "Nome"
                }
            ];
        }
    };
    RegistryListComponent.prototype.selectRegistry = function (reg) {
        console.log("select " + reg["id"]);
        this.selectedRegistry = reg;
    };
    RegistryListComponent.prototype.view = function (event, reg) {
        //event.stopPropagation();
        console.log("view: " + reg["id"]);
        //this.router.navigate([this.crudpath + "/" + group.id]);
    };
    RegistryListComponent.prototype.edit = function (event, reg) {
        //event.stopPropagation();
        console.log("edit " + reg["id"]);
        //this.router.navigate([this.crudpath + "/" + group.id]);
    };
    RegistryListComponent.prototype.remove = function (event, reg) {
        //event.stopPropagation();
        console.log("remove " + reg["id"]);
        //this.router.navigate([this.crudpath + "/" + group.id]);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], RegistryListComponent.prototype, "data", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], RegistryListComponent.prototype, "columns", void 0);
    RegistryListComponent = __decorate([
        core_1.Component({
            selector: "eb-registry-list",
            template: "\n    <div>\n      <div>\n        <div class=\"panel panel-default\">\n          <table class=\"table table-hover table-striped\">\n            <tr>\n              <th *ngFor=\"let column of columns\">{{column.description}}</th>\n              <th>A\u00E7\u00F5es</th>\n            </tr>\n            <tr *ngFor=\"let reg of data\" [class.info]=\"selectedRegistry == reg\">\n              <td *ngFor=\"let column of columns\" (click)=\"selectRegistry(reg)\">{{reg[column.field]}}</td>\n              <td>\n                <button (click)=\"view($event, team)\">\n                  <span class=\"glyphicon glyphicon-eye-open\" aria-hidden=\"true\"></span>\n                </button>\n                <button (click)=\"edit($event, team)\">\n                  <span class=\"glyphicon glyphicon-pencil\" aria-hidden=\"true\"></span>\n                </button>\n                <button (click)=\"remove($event, team)\">\n                  <span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span>\n                </button>\n              </td>\n            </tr>\n          </table>\n        </div>\n        <nav aria-label=\"...\">\n          <ul class=\"pagination\">\n            <li class=\"disabled\"><a href=\"#\" aria-label=\"Previous\"><span aria-hidden=\"true\">&laquo;</span></a></li>\n            <li class=\"active\"><a href=\"#\">1</a></li>\n            <li><a href=\"#\">2</a></li>\n            <li><a href=\"#\">3</a></li>\n            <li><a href=\"#\">4</a></li>\n            <li><a href=\"#\">5</a></li>\n            <li><a href=\"#\" aria-label=\"Next\"><span aria-hidden=\"true\">&laquo;</span></a></li>\n          </ul>\n        </nav>\n      </div>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], RegistryListComponent);
    return RegistryListComponent;
}());
exports.RegistryListComponent = RegistryListComponent;
//# sourceMappingURL=registry-list.component.js.map
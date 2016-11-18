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
var router_1 = require('@angular/router');
var entity_1 = require("../entity/entity");
var FormHeaderComponent = (function () {
    function FormHeaderComponent(router) {
        this.router = router;
        this.registry = new entity_1.Entity();
    }
    FormHeaderComponent.prototype.ngOnInit = function () {
    };
    FormHeaderComponent.prototype.list = function () {
        if (this.listpath != null && this.listpath != undefined && this.listpath != '') {
            this.router.navigate([this.listpath]);
        }
        else {
            console.log('Especify the listpath property');
        }
    };
    FormHeaderComponent.prototype.help = function () {
        console.log("Ajuda!");
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], FormHeaderComponent.prototype, "title", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', entity_1.Entity)
    ], FormHeaderComponent.prototype, "registry", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], FormHeaderComponent.prototype, "listpath", void 0);
    FormHeaderComponent = __decorate([
        core_1.Component({
            selector: "eb-form-header",
            template: "\n    <nav class=\"navbar navbar-default\">\n      <div class=\"container-fluid\">\n        <div class=\"collapse navbar-collapse\">\n          <div class=\"navbar-header\">\n            <div class=\"navbar-brand\">\n              <!--<span *ngIf=\"registry.id == null || registry.id == undefined\">Incluindo</span>\n              <span *ngIf=\"registry.id !== null && registry.id != undefined\">Editando</span>-->\n              <span>{{title}}</span>\n              <span>({{registry?.id}})</span>\n            </div>\n            <div class=\"navbar-brand\" style=\"width: 50px\"></div>\n          </div>\n          <ul class=\"nav nav-pills navbar-right\">\n            <li><div class=\"navbar-text\" (click)=\"list()\">Lista</div></li>\n            <li><div class=\"navbar-text\" (click)=\"help()\">Ajuda</div></li>\n          </ul>\n        </div>\n      </div>\n    </nav>\n  "
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], FormHeaderComponent);
    return FormHeaderComponent;
}());
exports.FormHeaderComponent = FormHeaderComponent;
//# sourceMappingURL=form-header.component.js.map
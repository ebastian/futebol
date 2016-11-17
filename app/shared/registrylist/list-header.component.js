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
var ListHeaderComponent = (function () {
    function ListHeaderComponent(router) {
        this.router = router;
    }
    ListHeaderComponent.prototype.ngOnInit = function () { };
    ListHeaderComponent.prototype.add = function () {
        if (this.formpath != null && this.formpath != undefined && this.formpath != '') {
            this.router.navigate([this.formpath]);
        }
        else {
            console.log('Especify the formpath property');
        }
    };
    ListHeaderComponent.prototype.search = function () {
        console.log("search: " + this.searchText);
    };
    ListHeaderComponent.prototype.help = function () {
        console.log("Ajuda!");
    };
    ListHeaderComponent.prototype.export = function () {
        console.log("Exportar!");
    };
    ListHeaderComponent.prototype.config = function () {
        console.log("Configurações!");
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ListHeaderComponent.prototype, "title", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ListHeaderComponent.prototype, "formpath", void 0);
    ListHeaderComponent = __decorate([
        core_1.Component({
            selector: "eb-list-header",
            template: "\n    <nav class=\"navbar navbar-default\">\n      <div class=\"container-fluid\">\n        <div class=\"collapse navbar-collapse\">\n          <div class=\"navbar-header\" style=\"width: 300px\">\n            <div class=\"navbar-brand\">{{title}}</div>\n          </div>\n          <form class=\"navbar-form navbar-left\">\n            <div class=\"form-group\">\n              <button type=\"button\" class='btn btn-primary' (click)='add()'>Adicionar</button>\n              <input [(ngModel)]=\"searchText\" [ngModelOptions]=\"{standalone: true}\" type=\"text\" class=\"form-control\" placeholder=\"Procurar\">\n              <button type=\"button\" class=\"btn btn-default\" (click)=\"search()\"><span class=\"glyphicon glyphicon-search\" aria-hidden=\"true\"></span></button>\n            </div>\n          </form>\n          <ul class=\"nav navbar-nav navbar-right\">\n            <li class=\"dropdown\">\n              <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Op\u00E7\u00F5es<span class=\"caret\"></span></a>\n              <ul class=\"dropdown-menu\">\n                <li><a href=\"#\" (click)=\"export()\">Exportar</a></li>\n                <li role=\"separator\" class=\"divider\"></li>\n                <li><a href=\"#\" (click)=\"config()\">Configura\u00E7\u00F5es</a></li>\n              </ul>\n            </li>\n            <li><a href=\"#\">Ajuda</a></li>\n          </ul>\n        </div>\n      </div>\n    </nav>\n  "
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], ListHeaderComponent);
    return ListHeaderComponent;
}());
exports.ListHeaderComponent = ListHeaderComponent;
//# sourceMappingURL=list-header.component.js.map
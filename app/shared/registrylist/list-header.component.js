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
var ListHeaderComponent = (function () {
    function ListHeaderComponent() {
    }
    ListHeaderComponent.prototype.ngOnInit = function () {
        console.log(">>" + this.title);
    };
    ListHeaderComponent.prototype.add = function () {
        console.log("add");
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ListHeaderComponent.prototype, "title", void 0);
    ListHeaderComponent = __decorate([
        core_1.Component({
            selector: "eb-list-header",
            template: "\n    <nav class=\"navbar navbar-default\">\n      <div class=\"container-fluid\">\n        <!-- Collect the nav links, forms, and other content for toggling -->\n        <div class=\"collapse navbar-collapse\">\n          <div class=\"navbar-header\">\n            <div class=\"navbar-brand\">{{title}}</div>\n          </div>\n          <ul class=\"nav navbar-nav navbar-right\">\n            <li class=\"dropdown\">\n              <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Op\u00E7\u00F5es<span class=\"caret\"></span></a>\n              <ul class=\"dropdown-menu\">\n                <li><a href=\"#\">Exportar</a></li>\n                <li role=\"separator\" class=\"divider\"></li>\n                <li><a href=\"#\">Configura\u00E7\u00F5es</a></li>\n              </ul>\n            </li>\n            <li><a href=\"#\">Ajuda</a></li>\n          </ul>\n        </div><!-- /.navbar-collapse -->\n      </div><!-- /.container-fluid -->\n    </nav>\n    <button class='btn btn-primary' (click)='add()'>Adicionar</button>\n    <hr>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], ListHeaderComponent);
    return ListHeaderComponent;
}());
exports.ListHeaderComponent = ListHeaderComponent;
//# sourceMappingURL=list-header.component.js.map
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
var RegistryFormComponent = (function () {
    function RegistryFormComponent(router) {
        this.router = router;
    }
    RegistryFormComponent.prototype.ngOnInit = function () {
    };
    RegistryFormComponent.prototype.save = function () {
    };
    RegistryFormComponent.prototype.cancel = function () {
        if (this.listpath != null && this.listpath != undefined && this.listpath != '') {
            this.router.navigate([this.listpath]);
        }
        else {
            console.log('Especify the listpath property');
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], RegistryFormComponent.prototype, "listpath", void 0);
    RegistryFormComponent = __decorate([
        core_1.Component({
            selector: "eb-registry-form",
            template: "\n    <form>\n      <ng-content></ng-content>\n      <div class=\"form-group\">\n        <button class=\"btn\" type=\"button\" (save)=save()>Salvar</button>\n        <button class=\"btn\" type=\"button\" (cancel)=cancel()>Cancelar</button>\n      </div>\n    </form>\n  "
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], RegistryFormComponent);
    return RegistryFormComponent;
}());
exports.RegistryFormComponent = RegistryFormComponent;
//# sourceMappingURL=registry-form.component.js.map
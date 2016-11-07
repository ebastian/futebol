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
var FormScreenComponent = (function () {
    function FormScreenComponent(router) {
        this.router = router;
        this.onSave = new core_1.EventEmitter();
        this.onDelete = new core_1.EventEmitter();
    }
    FormScreenComponent.prototype.ngOnInit = function () {
    };
    FormScreenComponent.prototype.save = function () {
        this.onSave.next();
        this.goBack();
    };
    FormScreenComponent.prototype.cancel = function () {
        this.goBack();
    };
    FormScreenComponent.prototype.delete = function () {
        this.onDelete.next();
        this.goBack();
    };
    FormScreenComponent.prototype.goBack = function () {
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
    ], FormScreenComponent.prototype, "listpath", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], FormScreenComponent.prototype, "title", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], FormScreenComponent.prototype, "registry", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], FormScreenComponent.prototype, "formpath", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], FormScreenComponent.prototype, "onSave", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], FormScreenComponent.prototype, "onDelete", void 0);
    FormScreenComponent = __decorate([
        core_1.Component({
            selector: "eb-form-screen",
            template: "\n    <eb-form-header [title]=\"title\" [listpath]=\"listpath\" [registry]=\"registry\"></eb-form-header>\n    <eb-registry-form (onSave)=\"save($event)\" (onDelete)=\"delete($event)\" (onCancel)=\"cancel($event)\">\n      <ng-content></ng-content>\n    </eb-registry-form>\n  "
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], FormScreenComponent);
    return FormScreenComponent;
}());
exports.FormScreenComponent = FormScreenComponent;
//# sourceMappingURL=form-screen.component.js.map
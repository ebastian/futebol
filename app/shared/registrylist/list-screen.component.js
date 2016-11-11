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
var progressbar_component_1 = require('../../shared/progressbar/progressbar.component');
var generic_service_1 = require('../../shared/service/generic-service');
var ListScreenComponent = (function () {
    function ListScreenComponent(router, service) {
        this.router = router;
        this.service = service;
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
    ListScreenComponent.prototype.ngAfterContentInit = function () {
        this.getItens();
    };
    ListScreenComponent.prototype.getItens = function () {
        var _this = this;
        this.pb.show();
        this.service.getItens().then(function (data) { return _this.data = data; }).then(function () { return _this.pb.hide(); });
    };
    ListScreenComponent.prototype.selectRegistry = function (reg) {
        this.selectedRegistry = reg;
    };
    ListScreenComponent.prototype.edit = function (event, reg) {
        this.router.navigate([this.formpath + "/" + reg["id"]]);
    };
    ListScreenComponent.prototype.delete = function (id) {
        this.service.remove(id);
    };
    __decorate([
        core_1.ViewChild('pb'), 
        __metadata('design:type', progressbar_component_1.ProgressBarComponent)
    ], ListScreenComponent.prototype, "pb", void 0);
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
            templateUrl: 'app/shared/registrylist/list-screen.template.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, generic_service_1.GenericService])
    ], ListScreenComponent);
    return ListScreenComponent;
}());
exports.ListScreenComponent = ListScreenComponent;
//# sourceMappingURL=list-screen.component.js.map
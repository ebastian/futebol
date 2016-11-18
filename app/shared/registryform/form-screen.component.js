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
var router_1 = require("@angular/router");
var router_2 = require("@angular/router");
var registry_form_component_1 = require("../../shared/registryform/registry-form.component");
var generic_service_1 = require("../../shared/service/generic-service");
var entity_1 = require("../entity/entity");
var FormScreenComponent = (function () {
    function FormScreenComponent(route, router, service) {
        this.route = route;
        this.router = router;
        this.service = service;
        this.busy = false;
        this.registry = new entity_1.Entity();
        this.onSave = new core_1.EventEmitter();
        this.onDelete = new core_1.EventEmitter();
    }
    FormScreenComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.regForm.busy = true;
        console.log("FormScreenComponent " + this.service.id);
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            if (!isNaN(id)) {
                console.log('ngOnInit - getItem ' + id);
                _this.service.getItem(id).then(function (registry) { return _this.registry = registry; }).then(function () { return console.log(">> " + JSON.stringify(_this.registry)); }).then(function () { return _this.regForm.busy = false; });
            }
            else {
                _this.regForm.busy = false;
            }
        });
    };
    FormScreenComponent.prototype.save = function () {
        console.log("formscreen save" + JSON.stringify(this.registry));
        this.service.save(this.registry);
        this.onSave.next();
        this.goBack();
    };
    FormScreenComponent.prototype.cancel = function () {
        this.goBack();
    };
    FormScreenComponent.prototype.delete = function () {
        console.log("formscreen delete" + JSON.stringify(this.registry));
        this.service.remove(this.registry.id);
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
    return FormScreenComponent;
}());
__decorate([
    core_1.ViewChild('regForm'),
    __metadata("design:type", registry_form_component_1.RegistryFormComponent)
], FormScreenComponent.prototype, "regForm", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], FormScreenComponent.prototype, "onSave", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], FormScreenComponent.prototype, "onDelete", void 0);
FormScreenComponent = __decorate([
    core_1.Component({
        template: '<h1>Form Screen</h1>',
        providers: [
            generic_service_1.GenericService
        ]
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_2.Router,
        generic_service_1.GenericService])
], FormScreenComponent);
exports.FormScreenComponent = FormScreenComponent;
//# sourceMappingURL=form-screen.component.js.map
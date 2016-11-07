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
var place_1 = require('../../entities/place');
var place_service_1 = require('../../services/place.service');
var PlaceComponent = (function () {
    function PlaceComponent(placeService, route) {
        this.placeService = placeService;
        this.route = route;
        this.place = new place_1.Place();
    }
    PlaceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            if (!isNaN(id)) {
                _this.placeService.getPlace(id).then(function (place) { return _this.place = place; });
            }
        });
    };
    PlaceComponent.prototype.save = function () {
        this.placeService.save(this.place);
    };
    PlaceComponent.prototype.delete = function () {
        this.placeService.remove(this.place.id);
    };
    PlaceComponent = __decorate([
        core_1.Component({
            template: "\n    <eb-form-screen [title]=\"'Estabelecimento'\" [listpath]=\"'places'\" [registry]=\"place\" (onSave)=\"save()\" (onDelete)=\"delete()\">\n      <div class=\"form-group\">\n        <label for=\"inputName\">Nome</label>\n        <input id=\"inputName\" class=\"form-control\" placeholder=\"nome\" required=\"\" autofocus=\"\" [(ngModel)]=\"place.name\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"inputDescription\">Descri\u00E7\u00E3o</label>\n        <input id=\"inputDescription\" class=\"form-control\" placeholder=\"descri\u00E7\u00E3o\" required=\"\" autofocus=\"\" [(ngModel)]=\"place.description\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"inputAddress\">Endere\u00E7o</label>\n        <input id=\"inputAddress\" class=\"form-control\" placeholder=\"endere\u00E7o\" required=\"\" autofocus=\"\" [(ngModel)]=\"place.address\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"inputPrice\">Pre\u00E7o</label>\n        <input id=\"inputPrice\" class=\"form-control\" placeholder=\"pre\u00E7o\" required=\"\" autofocus=\"\" [(ngModel)]=\"place.price\">\n      </div>\n    </eb-form-screen>\n  ",
            providers: [
                place_service_1.PlaceService
            ]
        }), 
        __metadata('design:paramtypes', [place_service_1.PlaceService, router_1.ActivatedRoute])
    ], PlaceComponent);
    return PlaceComponent;
}());
exports.PlaceComponent = PlaceComponent;
//# sourceMappingURL=place.component.js.map
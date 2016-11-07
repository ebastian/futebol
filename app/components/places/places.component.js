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
var place_service_1 = require('../../services/place.service');
var PlacesComponent = (function () {
    function PlacesComponent(placeService) {
        this.placeService = placeService;
        this.columns = [
            {
                field: "id",
                description: "Id"
            },
            {
                field: "name",
                description: "Nome"
            },
            {
                field: "description",
                description: "Descrição"
            },
            {
                field: "address",
                description: "Endereço"
            },
            {
                field: "price",
                description: "Preço"
            }
        ];
    }
    PlacesComponent.prototype.ngOnInit = function () {
        this.getPlaces();
    };
    PlacesComponent.prototype.getPlaces = function () {
        var _this = this;
        this.placeService.getPlaces().then(function (places) { return _this.places = places; });
    };
    PlacesComponent.prototype.delete = function (id) {
        this.placeService.remove(id);
    };
    PlacesComponent = __decorate([
        core_1.Component({
            template: "\n    <eb-list-screen\n      [title]=\"'Estabelecimentos'\"\n      [columns]=\"columns\"\n      [data]=\"places\"\n      [formpath]=\"'place'\"\n      (onDelete)=\"delete($event)\">\n    </eb-list-screen>\n  ",
            providers: [
                place_service_1.PlaceService
            ]
        }), 
        __metadata('design:paramtypes', [place_service_1.PlaceService])
    ], PlacesComponent);
    return PlacesComponent;
}());
exports.PlacesComponent = PlacesComponent;
//# sourceMappingURL=places.component.js.map
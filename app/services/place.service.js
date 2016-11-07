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
var place_mock_1 = require('./place.mock');
var PlaceService = (function () {
    function PlaceService() {
    }
    PlaceService.prototype.getPlaces = function () {
        return Promise.resolve(place_mock_1.PLACES);
    };
    PlaceService.prototype.save = function (place) {
        if (place.id === undefined || place.id === null) {
            place.id = place_mock_1.PLACES[place_mock_1.PLACES.length - 1].id + 1;
            place_mock_1.PLACES.push(place);
            console.log("Adicionou " + place.id);
        }
        else {
            this.getPlaceIndex(place.id).then(function (index) { return place_mock_1.PLACES[index] = place; });
        }
    };
    PlaceService.prototype.getPlace = function (id) {
        return this.getPlaces().then(function (places) { return places.find(function (place) { return place.id === id; }); });
    };
    PlaceService.prototype.getPlaceIndex = function (id) {
        return this.getPlaces().then(function (places) { return places.findIndex(function (place) { return place.id === id; }); });
    };
    PlaceService.prototype.remove = function (id) {
        var _this = this;
        return this.getPlaceIndex(id).then(function (index) { return _this.getPlaces().then(function (places) { return places.splice(index, 1); }); });
    };
    PlaceService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], PlaceService);
    return PlaceService;
}());
exports.PlaceService = PlaceService;
//# sourceMappingURL=place.service.js.map
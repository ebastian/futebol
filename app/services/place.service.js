"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var generic_service_1 = require('../shared/service/generic-service');
var place_mock_1 = require('./place.mock');
var PlaceService = (function (_super) {
    __extends(PlaceService, _super);
    function PlaceService() {
        _super.apply(this, arguments);
        this.id = 'PlaceService';
        this.data = place_mock_1.PLACES;
    }
    PlaceService.prototype.remove = function (id) {
        console.log('super.remove ' + id);
        return _super.prototype.remove.call(this, id);
    };
    PlaceService.prototype.save = function (item) {
        console.log('super.save' + JSON.stringify(item));
        _super.prototype.save.call(this, item);
    };
    PlaceService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], PlaceService);
    return PlaceService;
}(generic_service_1.GenericService));
exports.PlaceService = PlaceService;
//# sourceMappingURL=place.service.js.map
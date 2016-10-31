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
var player_service_1 = require('../../services/player.service');
var PlayerComponent = (function () {
    function PlayerComponent(playerService) {
        this.playerService = playerService;
    }
    PlayerComponent.prototype.ngOnInit = function () {
    };
    PlayerComponent = __decorate([
        core_1.Component({
            template: "\n    <eb-form-header [title]=\"'Jogador'\" [listpath]=\"'players'\"></eb-form-header>\n    <eb-registry-form [listpath]=\"'players'\">\n      N\u00E3o h\u00E1 form\n    </eb-registry-form>\n  ",
            providers: [
                player_service_1.PlayerService
            ]
        }), 
        __metadata('design:paramtypes', [player_service_1.PlayerService])
    ], PlayerComponent);
    return PlayerComponent;
}());
exports.PlayerComponent = PlayerComponent;
//# sourceMappingURL=player.component.js.map
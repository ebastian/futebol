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
var PlayersComponent = (function () {
    function PlayersComponent(playerService) {
        this.playerService = playerService;
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
                field: "email",
                description: "E-mail"
            },
            {
                field: "rating",
                description: "Rating"
            }
        ];
    }
    PlayersComponent.prototype.ngOnInit = function () {
        this.getPlayers();
    };
    PlayersComponent.prototype.getPlayers = function () {
        var _this = this;
        this.playerService.getPlayers().then(function (players) { return _this.players = players; });
    };
    PlayersComponent = __decorate([
        core_1.Component({
            template: "\n    <eb-list-header [title]=\"'Jogadores'\"></eb-list-header>\n    <eb-registry-list [columns]=\"columns\" [data]=\"players\"></eb-registry-list>\n  ",
            providers: [
                player_service_1.PlayerService
            ]
        }), 
        __metadata('design:paramtypes', [player_service_1.PlayerService])
    ], PlayersComponent);
    return PlayersComponent;
}());
exports.PlayersComponent = PlayersComponent;
//# sourceMappingURL=players.component.js.map
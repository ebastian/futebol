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
var player_mock_1 = require('./player.mock');
var PlayerService = (function () {
    function PlayerService() {
    }
    PlayerService.prototype.getPlayers = function () {
        return Promise.resolve(player_mock_1.PLAYERS);
    };
    PlayerService.prototype.save = function (player) {
        if (player.id === undefined || player.id === null) {
            player.id = player_mock_1.PLAYERS[player_mock_1.PLAYERS.length - 1].id + 1;
            player_mock_1.PLAYERS.push(player);
            console.log("Adicionou " + player.id);
        }
        else {
            this.getPlayerIndex(player.id).then(function (index) { return player_mock_1.PLAYERS[index] = player; });
        }
    };
    PlayerService.prototype.getPlayer = function (id) {
        return this.getPlayers().then(function (players) { return players.find(function (player) { return player.id === id; }); });
    };
    PlayerService.prototype.getPlayerIndex = function (id) {
        return this.getPlayers().then(function (players) { return players.findIndex(function (player) { return player.id === id; }); });
    };
    PlayerService.prototype.remove = function (id) {
        var _this = this;
        return this.getPlayerIndex(id).then(function (index) { return _this.getPlayers().then(function (players) { return players.splice(index, 1); }); });
    };
    PlayerService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], PlayerService);
    return PlayerService;
}());
exports.PlayerService = PlayerService;
//# sourceMappingURL=player.service.js.map
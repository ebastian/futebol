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
var player_1 = require('../../entities/player');
var player_service_1 = require('../../services/player.service');
var PlayerComponent = (function () {
    function PlayerComponent(playerService, route) {
        this.playerService = playerService;
        this.route = route;
        this.player = new player_1.Player();
    }
    PlayerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            if (!isNaN(id)) {
                _this.playerService.getItem(id).then(function (player) { return _this.player = player; });
            }
        });
    };
    PlayerComponent.prototype.save = function () {
        this.playerService.save(this.player);
    };
    PlayerComponent.prototype.delete = function () {
        this.playerService.remove(this.player.id);
    };
    PlayerComponent = __decorate([
        core_1.Component({
            template: "\n    <eb-form-screen [title]=\"'Jogador'\" [listpath]=\"'players'\" [registry]=\"player\" (onSave)=\"save()\" (onDelete)=\"delete()\">\n      <div class=\"form-group\">\n        <label for=\"inputName\">Nome</label>\n        <input id=\"inputName\" class=\"form-control\" placeholder=\"nome\" required=\"\" autofocus=\"\" [(ngModel)]=\"player.name\">\n      </div>\n    </eb-form-screen>\n  ",
            providers: [
                player_service_1.PlayerService
            ]
        }), 
        __metadata('design:paramtypes', [player_service_1.PlayerService, router_1.ActivatedRoute])
    ], PlayerComponent);
    return PlayerComponent;
}());
exports.PlayerComponent = PlayerComponent;
//# sourceMappingURL=player.component.js.map
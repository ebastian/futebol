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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var router_2 = require('@angular/router');
var form_screen_component_1 = require('../../shared/registryform/form-screen.component');
var player_1 = require('../../entities/player');
var player_service_1 = require('../../services/player.service');
var PlayerComponent = (function (_super) {
    __extends(PlayerComponent, _super);
    function PlayerComponent(route, router, playerService) {
        _super.call(this, route, router, playerService);
        this.registry = new player_1.Player();
        this.listpath = 'players';
    }
    PlayerComponent = __decorate([
        core_1.Component({
            template: "\n    <!--<eb-form-screen [title]=\"'Jogador'\" [listpath]=\"'players'\" [registry]=\"player\" (onSave)=\"save()\" (onDelete)=\"delete()\">-->\n    <eb-form-header [title]=\"'Jogador'\" [listpath]=\"'players'\"></eb-form-header>\n    <eb-registry-form [registry]=\"registry\" (onSave)=\"save($event)\" (onDelete)=\"delete($event)\" (onCancel)=\"cancel($event)\">\n      <div class=\"form-group\">\n        <label for=\"inputName\">Nome</label>\n        <input id=\"inputName\" class=\"form-control\" placeholder=\"nome\" required=\"\" autofocus=\"\" [(ngModel)]=\"registry.name\">\n      </div>\n    </eb-registry-form>\n    <!--</eb-form-screen>-->\n  ",
            providers: [
                player_service_1.PlayerService
            ]
        }),
        __param(0, core_1.Inject(router_1.ActivatedRoute)),
        __param(1, core_1.Inject(router_2.Router)),
        __param(2, core_1.Inject(player_service_1.PlayerService)), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_2.Router, player_service_1.PlayerService])
    ], PlayerComponent);
    return PlayerComponent;
}(form_screen_component_1.FormScreenComponent));
exports.PlayerComponent = PlayerComponent;
//# sourceMappingURL=player.component.js.map
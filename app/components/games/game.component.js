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
var game_1 = require('../../entities/game');
var game_service_1 = require('../../services/game.service');
var GameComponent = (function (_super) {
    __extends(GameComponent, _super);
    function GameComponent(route, router, gameService) {
        _super.call(this, route, router, gameService);
        this.registry = new game_1.Game();
        this.listpath = 'games';
    }
    GameComponent = __decorate([
        core_1.Component({
            template: "\n    <!--<eb-form-screen [title]=\"'Jogo'\" [listpath]=\"'games'\">-->\n    <eb-form-header [title]=\"'Jogo'\" [listpath]=\"'games'\"></eb-form-header>\n    <eb-registry-form [registry]=\"registry\" (onSave)=\"save($event)\" (onDelete)=\"delete($event)\" (onCancel)=\"cancel($event)\">\n      <br>\n      <br>\n      N\u00E3o dispon\u00EDvel.\n      <br>\n      <br>\n    </eb-registry-form>\n  ",
            providers: [
                game_service_1.GameService
            ]
        }),
        __param(0, core_1.Inject(router_1.ActivatedRoute)),
        __param(1, core_1.Inject(router_2.Router)),
        __param(2, core_1.Inject(game_service_1.GameService)), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_2.Router, game_service_1.GameService])
    ], GameComponent);
    return GameComponent;
}(form_screen_component_1.FormScreenComponent));
exports.GameComponent = GameComponent;
//# sourceMappingURL=game.component.js.map
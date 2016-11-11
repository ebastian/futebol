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
var list_screen_component_1 = require('../../shared/registrylist/list-screen.component');
var player_service_1 = require('../../services/player.service');
var PlayersComponent = (function (_super) {
    __extends(PlayersComponent, _super);
    function PlayersComponent(router, playerService) {
        _super.call(this, router, playerService);
        this.title = "Jogares";
        this.formpath = "player";
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
    PlayersComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/shared/registrylist/list-screen.template.html',
            providers: [
                player_service_1.PlayerService
            ]
        }),
        __param(0, core_1.Inject(router_1.Router)),
        __param(1, core_1.Inject(player_service_1.PlayerService)), 
        __metadata('design:paramtypes', [router_1.Router, player_service_1.PlayerService])
    ], PlayersComponent);
    return PlayersComponent;
}(list_screen_component_1.ListScreenComponent));
exports.PlayersComponent = PlayersComponent;
//# sourceMappingURL=players.component.js.map
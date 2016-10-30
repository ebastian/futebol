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
var timeline_component_1 = require('../components/timeline/timeline.component');
var perfil_component_1 = require('../components/perfil/perfil.component');
var teams_component_1 = require('../components/teams/teams.component');
var games_component_1 = require('../components/games/games.component');
var players_component_1 = require('../components/players/players.component');
var places_component_1 = require('../components/places/places.component');
var routes = [
    {
        path: '',
        redirectTo: 'timeline',
        pathMatch: 'full'
    },
    {
        path: 'timeline',
        component: timeline_component_1.TimelineComponent
    },
    {
        path: 'perfil',
        component: perfil_component_1.PerfilComponent
    },
    {
        path: 'teams',
        component: teams_component_1.TeamsComponent
    },
    {
        path: 'games',
        component: games_component_1.GamesComponent
    },
    {
        path: 'players',
        component: players_component_1.PlayersComponent
    },
    {
        path: 'places',
        component: places_component_1.PlacesComponent
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map
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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var app_component_1 = require('./app.component');
var app_routing_module_1 = require('./routing/app-routing.module');
var nav_component_1 = require('./shared/nav/nav.component');
var registry_list_component_1 = require('./shared/registrylist/registry-list.component');
var list_header_component_1 = require('./shared/registrylist/list-header.component');
var registry_form_component_1 = require('./shared/registryform/registry-form.component');
var form_header_component_1 = require('./shared/registryform/form-header.component');
var timeline_component_1 = require('./components/timeline/timeline.component');
var perfil_component_1 = require('./components/perfil/perfil.component');
var teams_component_1 = require('./components/teams/teams.component');
var team_component_1 = require('./components/teams/team.component');
var games_component_1 = require('./components/games/games.component');
var game_component_1 = require('./components/games/game.component');
var players_component_1 = require('./components/players/players.component');
var player_component_1 = require('./components/players/player.component');
var places_component_1 = require('./components/places/places.component');
var place_component_1 = require('./components/places/place.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                app_routing_module_1.AppRoutingModule
            ],
            declarations: [
                app_component_1.AppComponent,
                nav_component_1.NavComponent,
                registry_list_component_1.RegistryListComponent,
                list_header_component_1.ListHeaderComponent,
                registry_form_component_1.RegistryFormComponent,
                form_header_component_1.FormHeaderComponent,
                timeline_component_1.TimelineComponent,
                perfil_component_1.PerfilComponent,
                teams_component_1.TeamsComponent,
                team_component_1.TeamComponent,
                games_component_1.GamesComponent,
                game_component_1.GameComponent,
                players_component_1.PlayersComponent,
                player_component_1.PlayerComponent,
                places_component_1.PlacesComponent,
                place_component_1.PlaceComponent
            ],
            bootstrap: [
                app_component_1.AppComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
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
var team_service_1 = require('../../services/team.service');
var TeamsComponent = (function () {
    function TeamsComponent(teamService) {
        this.teamService = teamService;
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
                field: "description",
                description: "Descrição"
            },
            {
                field: "players",
                description: "Jogadores"
            }
        ];
    }
    TeamsComponent.prototype.ngOnInit = function () {
        this.getTeams();
    };
    TeamsComponent.prototype.getTeams = function () {
        var _this = this;
        this.teamService.getTeams().then(function (teams) { return _this.teams = teams; });
    };
    TeamsComponent = __decorate([
        core_1.Component({
            template: "\n    <eb-list-header [title]=\"'Times'\" [formpath]=\"'team'\"></eb-list-header>\n    <eb-registry-list [columns]=\"columns\" [data]=\"teams\"></eb-registry-list>\n  ",
            providers: [
                team_service_1.TeamService
            ]
        }), 
        __metadata('design:paramtypes', [team_service_1.TeamService])
    ], TeamsComponent);
    return TeamsComponent;
}());
exports.TeamsComponent = TeamsComponent;
//# sourceMappingURL=teams.component.js.map
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
var team_mock_1 = require('./team.mock');
var TeamService = (function () {
    function TeamService() {
    }
    TeamService.prototype.getTeams = function () {
        return Promise.resolve(team_mock_1.TEAMS);
    };
    TeamService.prototype.save = function (team) {
        if (team.id === undefined || team.id === null) {
            team.id = team_mock_1.TEAMS[team_mock_1.TEAMS.length - 1].id + 1;
            team_mock_1.TEAMS.push(team);
            console.log("Adicionou " + team.id);
        }
        else {
            this.getTeamIndex(team.id).then(function (index) { return team_mock_1.TEAMS[index] = team; });
        }
    };
    TeamService.prototype.getTeam = function (id) {
        return this.getTeams().then(function (teams) { return teams.find(function (team) { return team.id === id; }); });
    };
    TeamService.prototype.getTeamIndex = function (id) {
        return this.getTeams().then(function (teams) { return teams.findIndex(function (team) { return team.id === id; }); });
    };
    TeamService.prototype.remove = function (id) {
        var _this = this;
        return this.getTeamIndex(id).then(function (index) { return _this.getTeams().then(function (teams) { return teams.splice(index, 1); }); });
    };
    TeamService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], TeamService);
    return TeamService;
}());
exports.TeamService = TeamService;
//# sourceMappingURL=team.service.js.map
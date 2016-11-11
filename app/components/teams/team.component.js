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
var team_1 = require('../../entities/team');
var team_service_1 = require('../../services/team.service');
var TeamComponent = (function () {
    function TeamComponent(teamService, route) {
        this.teamService = teamService;
        this.route = route;
        this.team = new team_1.Team();
    }
    TeamComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            if (!isNaN(id)) {
                _this.teamService.getItem(id).then(function (team) { return _this.team = team; });
            }
        });
    };
    TeamComponent.prototype.save = function () {
        this.teamService.save(this.team);
    };
    TeamComponent.prototype.delete = function () {
        this.teamService.remove(this.team.id);
    };
    TeamComponent = __decorate([
        core_1.Component({
            template: "\n    <eb-form-screen [title]=\"'Time'\" [listpath]=\"'teams'\" [registry]=\"team\" (onSave)=\"save()\" (onDelete)=\"delete()\">\n      <div class=\"form-group col-md-6\">\n        <label for=\"inputName\">Nome</label>\n        <input id=\"inputName\" class=\"form-control\" placeholder=\"nome\" required=\"\" autofocus=\"\">\n      </div>\n      <div class=\"form-group col-md-6\">\n        <label for=\"inputPassword\">Tipo</label>\n        <input id=\"inputPassword\" class=\"form-control\" placeholder=\"tipo\" required=\"\">\n      </div>\n      <div class=\"form-group col-md-12\">\n        <label for=\"inputDesc\">Descri\u00E7\u00E3o</label>\n        <textarea id=\"inputDesc\" class=\"form-control\" placeholder=\"descri\u00E7\u00E3o\" required=\"\" autofocus=\"\"></textarea>\n      </div>\n    </eb-form-screen>\n  ",
            providers: [
                team_service_1.TeamService
            ]
        }), 
        __metadata('design:paramtypes', [team_service_1.TeamService, router_1.ActivatedRoute])
    ], TeamComponent);
    return TeamComponent;
}());
exports.TeamComponent = TeamComponent;
//# sourceMappingURL=team.component.js.map
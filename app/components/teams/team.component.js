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
var TeamComponent = (function () {
    function TeamComponent(playerService) {
        this.playerService = playerService;
    }
    TeamComponent.prototype.ngOnInit = function () {
    };
    TeamComponent = __decorate([
        core_1.Component({
            template: "\n    <eb-form-header [title]=\"'Time'\" [listpath]=\"'teams'\"></eb-form-header>\n    <eb-registry-form [listpath]=\"'teams'\">\n      <div class=\"form-group\">\n        <label for=\"inputName\">Nome</label>\n        <input id=\"inputName\" class=\"form-control\" placeholder=\"nome\" required=\"\" autofocus=\"\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"inputEmail\">Descri\u00E7\u00E3o</label>\n        <input id=\"inputEmail\" class=\"form-control\" placeholder=\"descri\u00E7\u00E3o\" required=\"\" autofocus=\"\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"inputPassword\">Tipo</label>\n        <input id=\"inputPassword\" class=\"form-control\" placeholder=\"tipo\" required=\"\">\n      </div>\n    </eb-registry-form>\n  ",
            providers: [
                team_service_1.TeamService
            ]
        }), 
        __metadata('design:paramtypes', [team_service_1.TeamService])
    ], TeamComponent);
    return TeamComponent;
}());
exports.TeamComponent = TeamComponent;
//# sourceMappingURL=team.component.js.map
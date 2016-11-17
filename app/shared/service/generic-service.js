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
var GenericService = (function () {
    function GenericService() {
        this.id = 'GenericService';
    }
    GenericService.prototype.getItensFast = function () {
        return Promise.resolve(this.data);
    };
    GenericService.prototype.getItens = function () {
        var _this = this;
        return new Promise(function (resolve) { return setTimeout(resolve, Math.floor(Math.random() * 1000)); }).then(function () { return _this.getItensFast(); });
    };
    GenericService.prototype.save = function (item) {
        var _this = this;
        console.log('genericservice save ' + JSON.stringify(item));
        if (item.id === undefined || item.id === null) {
            console.log(">>>>" + this.data);
            item.id = this.data[this.data.length - 1].id + 1;
            this.data.push(item);
            console.log("Adicionou " + item.id);
        }
        else {
            this.getItemIndex(item.id).then(function (index) { return _this.data[index] = item; });
        }
    };
    GenericService.prototype.getItem = function (id) {
        console.log('getItem ' + id);
        return this.getItens().then(function (items) { return items.find(function (item) { return item.id === id; }); });
    };
    GenericService.prototype.getItemIndex = function (id) {
        return this.getItens().then(function (items) { return items.findIndex(function (item) { return item.id === id; }); });
    };
    GenericService.prototype.remove = function (id) {
        var _this = this;
        console.log('GenericService delete ' + id);
        return this.getItemIndex(id).then(function (index) { return _this.getItens().then(function (items) { return items.splice(index, 1); }); });
    };
    GenericService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], GenericService);
    return GenericService;
}());
exports.GenericService = GenericService;
//# sourceMappingURL=generic-service.js.map
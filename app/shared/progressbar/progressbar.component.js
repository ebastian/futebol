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
var ng2_bs3_modal_1 = require('ng2-bs3-modal/ng2-bs3-modal');
var ProgressBarComponent = (function () {
    function ProgressBarComponent() {
    }
    ProgressBarComponent.prototype.ngOnInit = function () {
    };
    ProgressBarComponent.prototype.show = function () {
        this.modal.open();
    };
    ProgressBarComponent.prototype.hide = function () {
        this.modal.close();
    };
    __decorate([
        core_1.ViewChild('modal'), 
        __metadata('design:type', ng2_bs3_modal_1.ModalComponent)
    ], ProgressBarComponent.prototype, "modal", void 0);
    ProgressBarComponent = __decorate([
        core_1.Component({
            selector: 'eb-progress-bar',
            template: "\n  <modal [animation]=\"false\" #modal>\n    <modal-header [show-close]=\"false\">\n      <h4 class=\"modal-title\">Aguarde...</h4>\n    </modal-header>\n    <modal-body>\n    <div class=\"progress\">\n      <div class=\"progress-bar progress-bar-striped active\" role=\"progressbar\" aria-valuenow=\"45\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 100%\">\n        <span class=\"sr-only\">Carregando...</span>\n      </div>\n    </div>\n    </modal-body>\n    <!--<modal-footer [show-default-buttons]=\"true\"></modal-footer>-->\n  </modal>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], ProgressBarComponent);
    return ProgressBarComponent;
}());
exports.ProgressBarComponent = ProgressBarComponent;
//# sourceMappingURL=progressbar.component.js.map
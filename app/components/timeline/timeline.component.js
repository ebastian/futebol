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
var TimelineComponent = (function () {
    function TimelineComponent() {
        this.posts = [];
    }
    TimelineComponent.prototype.ngOnInit = function () {
        this.posts = [{
                "user": "Kelly",
                "avatar": "http://bootdey.com/img/Content/avatar/avatar5.png",
                "text": "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy."
            }, {
                "user": "Earl",
                "avatar": "https://gitlab.com/uploads/user/avatar/56386/tt_avatar_small.jpg",
                "text": "Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque."
            }, {
                "user": "Ashley",
                "avatar": "http://bootdey.com/img/Content/avatar/avatar5.png",
                "text": "Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula."
            }, {
                "user": "Wayne",
                "avatar": "https://gitlab.com/uploads/user/avatar/56386/tt_avatar_small.jpg",
                "text": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum."
            }, {
                "user": "Katherine",
                "avatar": "http://bootdey.com/img/Content/avatar/avatar5.png",
                "text": "Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque."
            }];
    };
    TimelineComponent = __decorate([
        core_1.Component({
            template: "\n    <h3>Timeline</h3>\n    <div class=\"container\">\n      <div class=\"list-group\">\n        <div *ngFor=\"let post of posts\" class=\"list-group-item\">\n          <div class=\"media-left\">\n            <img class=\"media-object user-thumbnail\" src=\"{{post.avatar}}\" alt=\"...\">\n          </div>\n          <div class=\"media-body\">\n            <h4 class=\"media-heading\">{{post.user}}</h4>\n            {{post.text}}\n          </div>\n        </div>\n      </div>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], TimelineComponent);
    return TimelineComponent;
}());
exports.TimelineComponent = TimelineComponent;
//# sourceMappingURL=timeline.component.js.map
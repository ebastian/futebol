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
                "timestamp": "18/11/2016 20:57:16:150",
                "avatar": "http://icons.iconarchive.com/icons/hopstarter/halloween-avatars/256/Zombie-Female-icon.png",
                "text": "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy."
            }, {
                "user": "Earl",
                "timestamp": "18/11/2016 11:27:16:520",
                "avatar": "http://icons.iconarchive.com/icons/hopstarter/halloween-avatars/256/Grim-Reaper-icon.png",
                "text": "Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque."
            }, {
                "user": "Ashley",
                "timestamp": "18/11/2016 20:57:16:150",
                "avatar": "http://icons.iconarchive.com/icons/hopstarter/halloween-avatars/256/Witch-icon.png",
                "text": "Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula."
            }, {
                "user": "Wayne",
                "timestamp": "18/11/2016 02:20:57:280",
                "avatar": "http://icons.iconarchive.com/icons/hopstarter/halloween-avatars/256/Pumpkin-icon.png",
                "text": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum."
            }, {
                "user": "Katherine",
                "timestamp": "18/11/2016 20:59:16:150",
                "avatar": "http://icons.iconarchive.com/icons/hopstarter/superhero-avatar/256/Avengers-Black-Widow-icon.png",
                "text": "Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque."
            }, {
                "user": "Katherine",
                "timestamp": "18/11/2016 20:57:16:150",
                "avatar": "http://icons.iconarchive.com/icons/hopstarter/superhero-avatar/256/Avengers-Black-Widow-icon.png",
                "text": "Horizontal description lists will truncate terms that are too long to fit in the left column with text-overflow. In narrower viewports, they will change to the default stacked layout."
            }, {
                "user": "Earl",
                "timestamp": "18/11/2016 05:48:17:671",
                "avatar": "http://icons.iconarchive.com/icons/hopstarter/halloween-avatars/256/Grim-Reaper-icon.png",
                "text": "Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque."
            }];
    };
    TimelineComponent = __decorate([
        core_1.Component({
            template: "\n    <h3>Timeline</h3>\n    <div class=\"container\">\n      <div class=\"list-group\">\n        <div *ngFor=\"let post of posts\" class=\"list-group-item\">\n          <div class=\"media-left\">\n            <img class=\"media-object user-thumbnail\" src=\"{{post.avatar}}\" alt=\"...\">\n          </div>\n          <div class=\"media-body\">\n            <blockquote>\n              <p>{{post.text}}</p>\n              <footer><strong>{{post.user}} </strong><cite title=\"Source Title\"> ({{post.timestamp}})</cite></footer>\n            </blockquote>\n          </div>\n        </div>\n      </div>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], TimelineComponent);
    return TimelineComponent;
}());
exports.TimelineComponent = TimelineComponent;
//# sourceMappingURL=timeline.component.js.map
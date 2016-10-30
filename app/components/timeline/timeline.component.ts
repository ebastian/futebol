import { Component, OnInit } from '@angular/core';

@Component({
  template: `
    <h3>Timeline</h3>
    <div class="container">
      <div class="list-group">
        <div *ngFor="let post of posts" class="list-group-item">
          <div class="media-left">
            <img class="media-object user-thumbnail" src="{{post.avatar}}" alt="...">
          </div>
          <div class="media-body">
            <h4 class="media-heading">{{post.user}}</h4>
            {{post.text}}
          </div>
        </div>
      </div>
    </div>
  `
})

export class TimelineComponent implements OnInit {

  posts = [];

  ngOnInit(): void {
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
  }
}

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
            <blockquote>
              <p>{{post.text}}</p>
              <footer><strong>{{post.user}} </strong><cite title="Source Title"> ({{post.timestamp}})</cite></footer>
            </blockquote>
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
  }
}

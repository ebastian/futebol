import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }   from './app.component';

import { NavComponent }   from './shared/nav/eb-nav.component';

import { AppRoutingModule }   from './routing/app-routing.module';

import { TimelineComponent }   from './components/timeline/timeline.component';
import { PerfilComponent }   from './components/perfil/perfil.component';
import { TeamsComponent }   from './components/teams/teams.component';
import { GamesComponent }   from './components/games/games.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    NavComponent,
    TimelineComponent,
    PerfilComponent,
    TeamsComponent,
    GamesComponent
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }

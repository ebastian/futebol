import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { AppRoutingModule }   from './routing/app-routing.module';

import { NavComponent }   from './shared/nav/eb-nav.component';
import { RegistryListComponent }   from './shared/registrylist/eb-registry-list.component';

import { TimelineComponent }   from './components/timeline/timeline.component';
import { PerfilComponent }   from './components/perfil/perfil.component';
import { TeamsComponent }   from './components/teams/teams.component';
import { GamesComponent }   from './components/games/games.component';
import { PlayersComponent }   from './components/players/players.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    NavComponent,
    RegistryListComponent,
    TimelineComponent,
    PerfilComponent,
    TeamsComponent,
    GamesComponent,
    PlayersComponent
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }

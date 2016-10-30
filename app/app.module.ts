import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { AppRoutingModule }   from './routing/app-routing.module';

import { NavComponent }   from './shared/nav/eb-nav.component';
import { RegistryListComponent }   from './shared/registrylist/registry-list.component';
import { ListHeaderComponent }   from './shared/registrylist/list-header.component';

import { TimelineComponent }   from './components/timeline/timeline.component';
import { PerfilComponent }   from './components/perfil/perfil.component';
import { TeamsComponent }   from './components/teams/teams.component';
import { GamesComponent }   from './components/games/games.component';
import { PlayersComponent }   from './components/players/players.component';
import { PlacesComponent }   from './components/places/places.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    NavComponent,
    RegistryListComponent,
    ListHeaderComponent,
    TimelineComponent,
    PerfilComponent,
    TeamsComponent,
    GamesComponent,
    PlayersComponent,
    PlacesComponent
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }

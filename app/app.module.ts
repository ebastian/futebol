import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }   from './app.component';
import { AppRoutingModule }   from './routing/app-routing.module';

import { NavComponent }   from './shared/nav/nav.component';
import { RegistryListComponent }   from './shared/registrylist/registry-list.component';
import { ListHeaderComponent }   from './shared/registrylist/list-header.component';
import { ListScreenComponent }   from './shared/registrylist/list-screen.component';
import { RegistryFormComponent }   from './shared/registryform/registry-form.component';
import { FormHeaderComponent }   from './shared/registryform/form-header.component';
import { FormScreenComponent }   from './shared/registryform/form-screen.component';

import { TimelineComponent }   from './components/timeline/timeline.component';
import { PerfilComponent }   from './components/perfil/perfil.component';
import { TeamsComponent }   from './components/teams/teams.component';
import { TeamComponent }   from './components/teams/team.component';
import { GamesComponent }   from './components/games/games.component';
import { GameComponent }   from './components/games/game.component';
import { PlayersComponent }   from './components/players/players.component';
import { PlayerComponent }   from './components/players/player.component';
import { PlacesComponent }   from './components/places/places.component';
import { PlaceComponent }   from './components/places/place.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    NavComponent,
    RegistryListComponent,
    ListHeaderComponent,
    ListScreenComponent,
    RegistryFormComponent,
    FormHeaderComponent,
    FormScreenComponent,
    TimelineComponent,
    PerfilComponent,
    TeamsComponent,
    TeamComponent,
    GamesComponent,
    GameComponent,
    PlayersComponent,
    PlayerComponent,
    PlacesComponent,
    PlaceComponent
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }

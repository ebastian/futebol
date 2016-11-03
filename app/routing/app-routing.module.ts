import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TimelineComponent }   from '../components/timeline/timeline.component';
import { PerfilComponent }   from '../components/perfil/perfil.component';
import { TeamsComponent }   from '../components/teams/teams.component';
import { TeamComponent }   from '../components/teams/team.component';
import { GamesComponent }   from '../components/games/games.component';
import { GameComponent }   from '../components/games/game.component';
import { PlayersComponent }   from '../components/players/players.component';
import { PlayerComponent }   from '../components/players/player.component';
import { PlacesComponent }   from '../components/places/places.component';
import { PlaceComponent }   from '../components/places/place.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'timeline',
    pathMatch: 'full'
  },
  {
    path: 'timeline',
    component: TimelineComponent
  },
  {
    path: 'perfil',
    component: PerfilComponent
  },
  {
    path: 'teams',
    component: TeamsComponent
  },
  {
    path: 'team',
    component: TeamComponent
  },
  {
    path: 'team/:id',
    component: TeamComponent
  },
  {
    path: 'games',
    component: GamesComponent
  },
  {
    path: 'game/:id',
    component: GameComponent
  },
  {
    path: 'game',
    component: GameComponent
  },
  {
    path: 'players',
    component: PlayersComponent
  },
  {
    path: 'player',
    component: PlayerComponent
  },
  {
    path: 'player/:id',
    component: PlayerComponent
  },
  {
    path: 'places',
    component: PlacesComponent
  },
  {
    path: 'place/:id',
    component: PlaceComponent
  },
  {
    path: 'place',
    component: PlaceComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TimelineComponent }   from '../components/timeline/timeline.component';
import { PerfilComponent }   from '../components/perfil/perfil.component';
import { TeamsComponent }   from '../components/teams/teams.component';
import { GamesComponent }   from '../components/games/games.component';
import { PlayersComponent }   from '../components/players/players.component';
import { PlacesComponent }   from '../components/places/places.component';

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
    path: 'games',
    component: GamesComponent
  },
  {
    path: 'players',
    component: PlayersComponent
  },
  {
    path: 'places',
    component: PlacesComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}

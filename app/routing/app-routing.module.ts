import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TimelineComponent }   from '../components/timeline/timeline.component';
import { PerfilComponent }   from '../components/perfil/perfil.component';
import { TeamsComponent }   from '../components/teams/teams.component';
import { GamesComponent }   from '../components/games/games.component';

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
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}

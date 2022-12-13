import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GameCreateComponent } from './pages/game-create/game-create.component';
import { GameDetailComponent } from './pages/game-detail/game-detail.component';
import { GameListComponent } from './pages/game-list/game-list.component';

const routes: Routes = [
  { path: 'home', component: GameListComponent },
  { path: 'game-detail', component: GameDetailComponent },
  { path: 'game-create', component: GameCreateComponent },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

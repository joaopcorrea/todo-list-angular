import { NewGameComponent } from './pages/new-game/new-game.component';
import { GameListComponent } from './pages/game-list/game-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', component: GameListComponent },
  { path: 'new-game', component: NewGameComponent },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

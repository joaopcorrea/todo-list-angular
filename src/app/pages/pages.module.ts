import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameListComponent } from './game-list/game-list.component';
import { GameItemComponent } from './game-list/game-item/game-item.component';
import { NewGameComponent } from './new-game/new-game.component';

import { SharedModule } from './../shared/shared.module';
import { MaterialModule } from './../material/material.module';
import { GameDetailComponent } from './game-detail/game-detail.component';

@NgModule({
  declarations: [
    GameListComponent,
    GameItemComponent,
    NewGameComponent,
    GameDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    GameListComponent,
    GameItemComponent
  ]
})
export class PagesModule { }
import { SharedModule } from './../shared/shared.module';
import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameListComponent } from './game-list/game-list.component';
import { GameItemComponent } from './game-list/game-item/game-item.component';
import { NewGameComponent } from './new-game/new-game.component';


@NgModule({
  declarations: [
    GameListComponent,
    GameItemComponent,
    NewGameComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
  ],
  exports: [
    GameListComponent,
    GameItemComponent
  ]
})
export class PagesModule { }
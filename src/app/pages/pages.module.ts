import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameListComponent } from './game-list/game-list.component';
import { GameItemComponent } from './game-list/game-item/game-item.component';


@NgModule({
  declarations: [
    GameListComponent,
    GameItemComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    GameListComponent,
    GameItemComponent
  ]
})
export class PagesModule { }
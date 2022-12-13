import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameListComponent } from './game-list/game-list.component';
import { GameItemComponent } from './game-list/game-item/game-item.component';

import { SharedModule } from './../shared/shared.module';
import { MaterialModule } from './../material/material.module';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { GameCreateComponent } from './game-create/game-create.component';

@NgModule({
  declarations: [
    GameListComponent,
    GameItemComponent,
    GameDetailComponent,
    GameCreateComponent,
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
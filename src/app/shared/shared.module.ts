import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialModule } from './../material/material.module';

import { SaleDirective } from './directives/sale.directive';

import { DiscountPipe } from './pipes/discount.pipe';

import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { SaleComponent } from './sale/sale.component';
import { DialogComponent } from './dialog/dialog.component';
import { GameFormComponent } from './game-form/game-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    SearchComponent,
    SaleDirective,
    SaleComponent,
    DiscountPipe,
    DialogComponent,
    GameFormComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    SearchComponent,
    SaleDirective,
    DiscountPipe,
    DialogComponent,
    GameFormComponent
  ]
})
export class SharedModule { }
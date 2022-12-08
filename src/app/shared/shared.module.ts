import { DiscountPipe } from './pipes/discount.pipe';
import { SaleDirective } from './directives/sale.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './../material/material.module';

import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { SaleComponent } from './sale/sale.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SearchComponent,
    SaleDirective,
    SaleComponent,
    DiscountPipe
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    HeaderComponent,
    SearchComponent,
    SaleDirective,
    DiscountPipe
  ]
})
export class SharedModule { }
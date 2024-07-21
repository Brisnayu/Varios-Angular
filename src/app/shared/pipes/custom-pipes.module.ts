import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterListPipe } from './filterList/filter-list.pipe';
import { PriceFormatPipe } from './priceFormat/price-format.pipe';
import { SortPipe } from './sort/sort.pipe';



@NgModule({
  declarations: [
    FilterListPipe,
    PriceFormatPipe,
    SortPipe
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    FilterListPipe,
    PriceFormatPipe,
    SortPipe
  ]
})
export class CustomPipesModule { }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterListPipe } from './filterList/filter-list.pipe';
import { PriceFormatPipe } from './priceFormat/price-format.pipe';
import { SortPipe } from './sort/sort.pipe';
import { ErrorMessagePipe } from './errorMessage/error-message.pipe';



@NgModule({
  declarations: [
    FilterListPipe,
    PriceFormatPipe,
    SortPipe,
    ErrorMessagePipe
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    FilterListPipe,
    PriceFormatPipe,
    SortPipe,
    ErrorMessagePipe
  ]
})
export class CustomPipesModule { }
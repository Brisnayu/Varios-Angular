import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceFormat'
})
export class PriceFormatPipe implements PipeTransform {

  transform(value: number, currencySymbol: string = '€'): string {
    if (isNaN(value)) return '';
    return `${currencySymbol} ${value.toFixed(2)} `;
  }

}

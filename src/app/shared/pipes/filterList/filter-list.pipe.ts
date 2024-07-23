import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterList'
})
export class FilterListPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (!items) return [];
    if (!searchText) return items;
    searchText = searchText.toLowerCase();
    
    return items.filter(item => {
      return Object.values(item).some(val => 
        typeof val === 'string' && val.toLowerCase().includes(searchText));
    });
  }

}

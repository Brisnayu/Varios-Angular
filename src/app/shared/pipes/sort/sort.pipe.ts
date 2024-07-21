import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(items: any[], sortBy: string): any[] {
    if (!items || !sortBy) return items;
    return items.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
  }

}

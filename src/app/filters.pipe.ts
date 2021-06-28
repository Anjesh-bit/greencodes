import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filters',
})
export class FiltersPipe implements PipeTransform {
  transform(items: any[], catagories: any): any {
    return items.filter((item) => {
      return item.imageCatagories === catagories;
    });
  }
}

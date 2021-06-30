import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contentPipes',
})
export class ContentPipesPipe implements PipeTransform {
  transform(itemscontent: any[], catagories: any): any[] {
    if (!itemscontent) return [];
    return itemscontent.filter((items) => {
      return items.catagories === catagories;
    });
  }
}

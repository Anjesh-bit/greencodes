import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'forImageCarousal',
})
export class ForImageCarousalPipe implements PipeTransform {
  transform(items: any[], catagories: any): any {
    return items.filter((item) => {
      return item.imageCatagories === catagories;
    });
  }
}

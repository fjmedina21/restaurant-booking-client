import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})

export class AgePipe implements PipeTransform {
  transform(value: string): number {

    const bornYear = new Date(value).getFullYear();
    const bornMonth = new Date(value).getMonth() + 1;
    const borntDay = new Date(value).getDate();

    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1;
    const currentDay = new Date().getDate();

    if (currentMonth < bornMonth) {
      return (currentYear - bornYear) - 1;
    }
    else if (currentMonth === bornMonth) {
      if (currentDay < borntDay) {
        return (currentYear - bornYear) - 1;
      }
      return (currentYear - bornYear);
    } else {
      return (currentYear - bornYear);
    }
  }
}

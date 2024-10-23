import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genre'
})

export class GenrePipe implements PipeTransform {
  transform(value: string): String {

    return value.toLowerCase() === "m" ? "Masculino" : "Femenino";
  }
}

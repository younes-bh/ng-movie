import { Pipe, PipeTransform } from '@angular/core';


@Pipe({name: 'stars'})
export class StarsPipe implements PipeTransform {

  transform(value: number, args: string[]): any {
    let text = '';
    for (let i = 0; i < value; i++) {
      text += '★';
    }
    return text;
  }

}

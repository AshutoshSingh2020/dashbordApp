import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstLetter'
})
export class FirstLetterPipe implements PipeTransform {
  transform(value: any): string {
    if (value && typeof value === 'string') {
      return value.charAt(0).toUpperCase();
    }
    return '';
  }
}

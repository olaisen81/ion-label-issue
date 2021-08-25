import { Pipe, PipeTransform } from '@angular/core';


@Pipe({ name: 'keys' })
export class KeysPipe implements PipeTransform {
  transform(value): any {
    const keys = [];
    for (const key in value) {
      if (!isNaN(parseInt(key, 10))) {
      keys.push({ key: parseInt(key, 10), value: value[key] });
      }
    }
    return keys;
  }
}





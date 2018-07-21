import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mydate'
})
export class MydatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const date = value as string;
    return date.substring(0, 16);
  }

}

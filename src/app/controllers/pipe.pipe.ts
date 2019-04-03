import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe'
})
export class PipePipe implements PipeTransform {

  transform(output: any, args?: any): any {
    const stars = Math.floor(output / 5);
    let starsOut = '';
    for (let i = 1; i <= stars; i++) {
      starsOut += '*';
    }
    return starsOut;
  }

}






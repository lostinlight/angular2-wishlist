import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment/moment';

@Pipe({name: 'wlTimeTransform'})

export class TimeTransformPipe implements PipeTransform {
  transform(value: string): string {
    let date = moment(value);
    let year = Number( moment(value).format('YYYY') );
    let currentYear = Number( moment().format('YYYY') );

    if (year >= currentYear) {
      return date.format('MMM D');
    } else {
      let gap = currentYear - year;
      return (gap > 1) ? `${gap} years ago` : `Last year`;
    }
  }
}

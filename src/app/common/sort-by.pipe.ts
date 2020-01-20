import { Pipe, PipeTransform } from '@angular/core';
import { sortBy } from 'lodash';
import * as _ from 'lodash';

@Pipe({
    name: 'orderBy',
    pure: true
})
export class OrderByPipe implements PipeTransform {

    transform(value: any[], type, propertyName: string): any[] {
        if (value.length <= 1) { return value; }
        return _.orderBy(value, propertyName, type);
    }

}

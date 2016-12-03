import {Pipe, PipeTransform} from "@angular/core";
import * as _ from 'lodash';

@Pipe({
    name: 'mapToIterable',
    pure: true
})

export class MapToIterablePipe implements PipeTransform {
    transform(value: any, args: any[] = null): any {
        return _.castArray(_.map(value, (v, k) => {
            return {
                'key': k,
                'value': v
            }
        }));
    }

}
import {Pipe, PipeTransform} from "@angular/core";
import _ = require("lodash");

@Pipe({
    name: 'sort',
    pure: true
})
export class SortPipe implements PipeTransform {

    transform(array: Array<any>, sortBy: string = null, sortOrder: string = null) {

        let prop = {
            name: (obj: {key:string, value: Server}) => obj.key,
            bind: (obj: {key:string, value: Server}) => _.get(obj, 'value.bind'),
            rx: (obj: {key:string, value: Server}) => _.get(obj, 'value.stats.rx_total'),
            tx: (obj: {key:string, value: Server}) => _.get(obj, 'value.stats.tx_total'),
            total: (obj: {key:string, value: Server}) => <number>_.get(obj, 'value.stats.rx_total') + <number>_.get(obj, 'value.stats.tx_total')
        };

        return array.sort((a, b) => {
            if (prop[sortBy](a) > prop[sortBy](b)) {
                return sortOrder === '+' ? 1 : -1;
            }
            if (prop[sortBy](a) < prop[sortBy](b)) {
                return sortOrder === '+' ? -1 : 1;
            }
            return 0;
        });
    }
}
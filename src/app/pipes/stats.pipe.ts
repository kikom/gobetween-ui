import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: 'statsPipe',
    pure: false
})

export class StatsPipe implements PipeTransform {
    transform(value: any, args: any = null): any {

        let units = ['b/s', 'kb/s', 'mb/s', 'gb/s'];

        let result = {
            value: value,
            unit: units[0]
        };

        if (result.value > 1024) {
            for (let i = 1; i < units.length; i++) {
                if (value/(i*1024)<1024 || i == units.length-1) {
                    result = {
                        value: value/(i*1024),
                        unit: units[i]
                    };
                    break;
                }
            }
        }

        return args === 'unit'? result.unit:parseFloat(result.value).toFixed(2);
    }
}
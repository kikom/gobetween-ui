import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: 'statsPipe',
    pure: false
})

export class StatsPipe implements PipeTransform {
    transform(value: any, args: any = null): any {

        let units = ['b/s', 'kb/s', 'mb/s', 'gb/s', 'tb/s'];

        let result = {
            value: value,
            unit: units[0]
        };

        for(let i = 1; i< units.length;i++){
            if(result.value>1024){
                result.value = result.value/1024;
                result.unit = units[i];
            }else{
                break;
            }
        }

        return args === 'unit'? result.unit:parseFloat(result.value).toFixed(2);
    }
}
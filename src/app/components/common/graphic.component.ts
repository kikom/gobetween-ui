import { Component, Input, Output, EventEmitter, OnInit, AfterContentChecked, OnChanges } from '@angular/core';
import {Title} from "@angular/platform-browser";
import {Stats} from "fs";
import * as _ from "lodash";


@Component({
    selector: 'ui-graphic',
    template: `
        <div *ngIf="arrStats && arrStats.length" class="ui-graphic">
            <canvas baseChart
                [datasets]="lineChartData"
                [labels]="lineChartLabels"
                [options]="lineChartOptions"
                [legend]="showLegend"
                [chartType]="lineChartType">   
            </canvas>
        </div>

    `,
})
export class ConnectionGraphic implements OnInit, AfterContentChecked{


    @Input()
    public arrStats: Array<Stats>;

    @Input()
    public lastElements: number;

    @Input()
    public titleText: string;

    @Input()
    public shema:any;

    @Input()
    public showLegend: boolean;

    private lineChartLabels:Array<any>;
    private lineChartData: Array<any>;
    private lineChartOptions: any;
    private lineChartType: string;

    constructor(
    ) {

        this.lineChartType = 'line';
        this.lastElements = 8;
        this.lineChartLabels = [];
        this.lineChartData = [];
        this.lineChartOptions= {
            animation: false,
            responsive: true,
            layout:{
                padding: 5
            },
            title: {
                display: false,
                text: '',
                fontSize: 19,
                fontFamily: 'source_sans_proregular',
                fontColor: "#585858"
            },
            legend: {
                display: false
            },
            tooltips: {
                titleFontSize: 0,
                titleSpacing: 0,
                callbacks: {
                    label: this.renderTooltipLabel
                }
            },
            scales: {
                xAxes: [{
                    display: false
                }],
                yAxes: [{
                    stacked: true
                }]
            }
        };
        this.shema = {};
    }

    ngOnInit(){
        this.chartDataUpdate();
    }

    ngAfterContentChecked(){
        this.chartDataUpdate()
    }


    chartDataUpdate(){

        if(this.titleText){
            this.lineChartOptions.title.display = true;
            this.lineChartOptions.title.text = this.titleText
        }

        if(this.showLegend){
            this.lineChartOptions.legend.display = true;
        }

        let converter: Function;
        let unit: string = this.getUnit(this.arrStats[0][this.shema[0]]);

        switch (unit) {
            case 'kb/s':
                converter = this.toKB;
                break;
            case 'mb/s':
                converter = this.toMB;
                break;
            case 'gb/s':
                converter = this.toGB;
                break;
            case 'tb/s':
                converter = this.toTB;
                break;
            default:
                converter = (value:any)=> value;
                break;
        }

        let newLineChartData: Array<any> = [];
        let newLineChartLabels: any = [];

        for(let i=0;i< this.shema.length; i++){

            let line: any = {
                data: [],
                label: `${this.shema[i]} (${unit})`
            };

            for(let j =0 ; j< this.arrStats.length; j++){
                line.data.push(converter(this.arrStats[j][this.shema[i]]));
            }

            newLineChartData.push(line);
        }

        for (let i=0; i< this.lastElements; i++){
            newLineChartLabels.push(i);
        }

        this.lineChartLabels = newLineChartLabels;
        this.lineChartData = newLineChartData;
    }

    getUnit(value: any){
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

        return result.unit;
    }

    toKB(value: any){
        return (value/1024).toFixed(2);
    }

    toMB(value: any){
        return (value/(1024*1024)).toFixed(2);
    }

    toGB(value: any){
        return (value/(1024*1024*1024)).toFixed(2);
    }

    toTB(value: any){
        return (value/(1024*1024*1024*1024)).toFixed(2);
    }

    renderTooltipLabel(tooltipItem:any, data: any){

        let yValue: number = tooltipItem.yLabel;
        let datasetIndex: number = tooltipItem.datasetIndex;

        let needLinePoint = data.datasets[datasetIndex];

        return needLinePoint.label + ": "+yValue;
    }



}
import { Component, Input, Output, EventEmitter, OnInit, AfterContentChecked, OnChanges } from '@angular/core';
import {Title} from "@angular/platform-browser";
import {Stats} from "fs";
import * as _ from "lodash";


@Component({
    selector: 'ui-graphic',
    templateUrl: `
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


        let newLineChartData: Array<any> = [];
        let slicedArrStats =  this.arrStats.length <= this.lastElements? this.arrStats: this.arrStats.slice((this.arrStats.length - this.lastElements));

        for(var key in this.shema){

            let line: any = {
                data: [],
                label: this.shema[key]
            };

            for(let i =0 ; i< slicedArrStats.length; i++){
                line.data.push(slicedArrStats[i][key]);
            }

            newLineChartData.push(line);
        }


        let newLineChartLabels: any = [];

        for (let i=0; i< this.lastElements; i++){
            newLineChartLabels.push(i);
        }
        this.lineChartLabels = newLineChartLabels;
        this.lineChartData =newLineChartData;
    }

    renderTooltipLabel(tooltipItem:any, data: any){

        let yValue: number = tooltipItem.yLabel;
        let datasetIndex: number = tooltipItem.datasetIndex;

        let needLinePoint = data.datasets[datasetIndex];

        return needLinePoint.label + ": "+yValue;
    }



}
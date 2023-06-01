import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';

export const HOURSLIST: any[] = [
  { id: 0, name: "Hour 00"},
  { id: 1, name: "Hour 01"},
  { id: 2, name: "Hour 02"},
  { id: 3, name: "Hour 03"},
  { id: 4, name: "Hour 04"},
  { id: 5, name: "Hour 05"},
  { id: 6, name: "Hour 06"},
  { id: 7, name: "Hour 07"},
  { id: 8, name: "Hour 08"},
  { id: 9, name: "Hour 09"},
  { id: 10, name: "Hour 10"},
  { id: 11, name: "Hour 11"},
  { id: 12, name: "Hour 12"},
  { id: 13, name: "Hour 13"},
  { id: 14, name: "Hour 14"},
  { id: 15, name: "Hour 15"},
  { id: 16, name: "Hour 16"},
  { id: 17, name: "Hour 17"},
  { id: 18, name: "Hour 18"},
  { id: 19, name: "Hour 19"},
  { id: 20, name: "Hour 20"},
  { id: 21, name: "Hour 21"},
  { id: 22, name: "Hour 22"},
  { id: 23, name: "Hour 23"},
  ];


@Component({
  selector: 'app-ucr-single-hour-selector',
  templateUrl: './ucr-single-hour-selector.component.html',
  styleUrls: ['./ucr-single-hour-selector.component.scss']
})
export class UcrSingleHourSelectorComponent implements OnInit, OnChanges {

  @Input() selectedHour!: number;
  @Input() hoursFilter!: number[];
  @Output() selectionChange = new EventEmitter<number>();
  hours: number[];

  constructor() {
    //todo. should be linke to the year and month selectors
    this.hours = HOURSLIST;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.hoursFilter){
      let newHours: number[] = [];
      this.hours.forEach(element => {
        if( this.hoursFilter.includes(element )  ){
          newHours.push(element);
        }
      });
      
      this.hours = newHours;
    }
  }

  ngOnInit(): void {
    //if no hour is selected then select the first hour by default
    if (this.hours.length > 0 && !this.selectedHour) {
      this.onChange(this.hours[0]);
    }
  }

  onChange(change: any) {
    this.selectedHour = change;
    this.selectionChange.emit(change);
  }


}

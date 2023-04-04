import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { HOURSLIST} from '../../mockdata/mockdata-list.mock';

@Component({
  selector: 'app-ucr-single-hour-selector',
  templateUrl: './ucr-single-hour-selector.component.html',
  styleUrls: ['./ucr-single-hour-selector.component.css']
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

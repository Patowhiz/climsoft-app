import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { DAYSLIST } from '../../mockdata/mockdata-list.mock';

@Component({
  selector: 'app-ucr-single-day-selector',
  templateUrl: './ucr-single-day-selector.component.html',
  styleUrls: ['./ucr-single-day-selector.component.css']
})
export class UcrSingleDaySelectorComponent implements OnInit, OnChanges  {

  @Input() selectedDay!: number;
  @Input() daysFilter!: number[];
  @Output() selectionChange = new EventEmitter<number>();
  days: any[];

  constructor() {
    //todo. should be linke to the year and month selectors
    this.days = DAYSLIST;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.daysFilter){
      let newDays: number[] = [];
      this.days.forEach(element => {
        if( this.daysFilter.includes(element )  ){
          newDays.push(element);
        }
      });
      
      this.days = newDays;
    }
  }

  ngOnInit(): void {
    //if no day is selected then select the first day by default
    if (this.days.length > 0 && !this.selectedDay) {
      this.onChange(this.days[0]);
    }
  }

  onChange(change: any) {
    this.selectedDay = change;
    this.selectionChange.emit(change);
  }


}

import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';


export const MONTHSLIST = [
  { id: 1, name: "January" },
  { id: 2, name: "February" },
  { id: 3, name: "March" },
  { id: 4, name: "April" },
  { id: 5, name: "May" },
  { id: 6, name: "June" },
  { id: 7, name: "July" },
  { id: 8, name: "August" },
  { id: 9, name: "September" },
  { id: 10, name: "October" },
  { id: 11, name: "November" },
  { id: 12, name: "December" }];



@Component({
  selector: 'app-ucr-single-month-selector',
  templateUrl: './ucr-single-month-selector.component.html',
  styleUrls: ['./ucr-single-month-selector.component.scss']
})
export class UcrSingleMonthSelectorComponent implements OnInit {

  //todo. create month interface
  @Input() selectedMonth!: Element;
  @Output() selectionChange = new EventEmitter<any>();
  months: any[];

  constructor() {
    //todo. load from the server
    this.months = MONTHSLIST;
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnInit(): void {
    //if no month is selected then select the first month by default
    if (this.months.length > 0 && !this.selectedMonth) {
      this.onChange(this.months[0]);
    }
  }

  onChange(change: any) {
    this.selectedMonth = change;
    this.selectionChange.emit(change);
  }


}

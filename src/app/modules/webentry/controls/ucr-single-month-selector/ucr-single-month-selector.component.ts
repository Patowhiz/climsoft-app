import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { MONTHSLIST } from '../../mockdata/mockdata-list.mock';

@Component({
  selector: 'app-ucr-single-month-selector',
  templateUrl: './ucr-single-month-selector.component.html',
  styleUrls: ['./ucr-single-month-selector.component.css']
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

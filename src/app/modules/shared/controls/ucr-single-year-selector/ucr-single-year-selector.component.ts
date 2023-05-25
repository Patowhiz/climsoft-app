import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';


@Component({
  selector: 'app-ucr-single-year-selector',
  templateUrl: './ucr-single-year-selector.component.html',
  styleUrls: ['./ucr-single-year-selector.component.css']
})
export class UcrSingleYearSelectorComponent implements OnInit {

  @Input() selectedYear!: number;
  @Output() selectionChange = new EventEmitter<number>();
  years: number[];

  constructor() {
    //todo. load from the server
    this.years = [2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015];
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnInit(): void {
    //if no year is selected then select the first year by default
    if (this.years.length > 0 && !this.selectedYear) {
      this.onChange(this.years[0]);
    }
  }

  onChange(change: any) {
    this.selectedYear = change;
    this.selectionChange.emit(change);
  }



}

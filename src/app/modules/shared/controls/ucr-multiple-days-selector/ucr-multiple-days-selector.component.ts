import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { MatLegacySelectionListChange as MatSelectionListChange } from '@angular/material/legacy-list';

export const DAYSLIST: any[] = [
  { id: 1, name: "Day 01"},
  { id: 2, name: "Day 02"},
  { id: 3, name: "Day 03"},
  { id: 4, name: "Day 04"},
  { id: 5, name: "Day 05"},
  { id: 6, name: "Day 06"},
  { id: 7, name: "Day 07"},
  { id: 8, name: "Day 08"},
  { id: 9, name: "Day 09"},
  { id: 10, name: "Day 10"},
  { id: 11, name: "Day 11"},
  { id: 12, name: "Day 12"},
  { id: 13, name: "Day 13"},
  { id: 14, name: "Day 14"},
  { id: 15, name: "Day 15"},
  { id: 16, name: "Day 16"},
  { id: 17, name: "Day 17"},
  { id: 18, name: "Day 18"},
  { id: 19, name: "Day 19"},
  { id: 20, name: "Day 20"},
  { id: 21, name: "Day 21"},
  { id: 22, name: "Day 22"},
  { id: 23, name: "Day 23"},
  { id: 24, name: "Day 24"},
  { id: 25, name: "Day 25"},
  { id: 26, name: "Day 26"},
  { id: 27, name: "Day 27"},
  { id: 28, name: "Day 28"},
  { id: 29, name: "Day 29"},
  { id: 30, name: "Day 30"},
  { id: 31, name: "Day 31"},
 ];

@Component({
  selector: 'app-ucr-multiple-days-selector',
  templateUrl: './ucr-multiple-days-selector.component.html',
  styleUrls: ['./ucr-multiple-days-selector.component.scss']
})
export class UcrMultipleDaysSelectorComponent implements OnInit, OnChanges {

  @Input() selectedElements: number[] = [];
  @Output() selectionChange = new EventEmitter<number[]>();
  daysList: any[] = [];

  constructor() { 
    this.daysList = DAYSLIST;
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }


  isSelected(item: number): boolean {
    return this.selectedElements.includes(item);
  }


  onChange(change: MatSelectionListChange) {
    let selectedItems: number[] = change.source.selectedOptions.selected.map(item => item.value);
    this.selectionChange.emit(selectedItems);
  }

}

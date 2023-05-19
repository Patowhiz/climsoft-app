import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { MatSelectionListChange } from '@angular/material/list';
import { DAYSLIST } from '../../mockdata/mockdata-list.mock';

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

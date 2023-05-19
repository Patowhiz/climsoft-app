import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { MatSelectionListChange } from '@angular/material/list';
import { HOURSLIST } from '../../mockdata/mockdata-list.mock';

@Component({
  selector: 'app-ucr-multiple-hours-selector',
  templateUrl: './ucr-multiple-hours-selector.component.html',
  styleUrls: ['./ucr-multiple-hours-selector.component.scss']
})
export class UcrMultipleHoursSelectorComponent implements OnInit, OnChanges {

  @Input() selectedElements: number[] = [];
  @Output() selectionChange = new EventEmitter<number[]>();
  hoursList: any[] = [];

  constructor() { 
    this.hoursList = HOURSLIST;
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

import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { MatSelectionListChange } from '@angular/material/list';

import { Station } from '../../models/station.model';

export const STATIONSLIST: Station[] = [
  { id: "1", name: 'Kisumu' },
  { id: "2", name: 'Kericho' },
  { id: "3", name: 'Eldoret' },
  { id: "4", name: 'Nairobi' }
];

@Component({
  selector: 'app-ucr-multiple-stations-selector',
  templateUrl: './ucr-multiple-stations-selector.component.html',
  styleUrls: ['./ucr-multiple-stations-selector.component.scss']
})
export class UcrMultipleStationsSelectorComponent implements OnInit, OnChanges {

  @Input() selectedElements: Station[] = [];
  @Output() selectionChange = new EventEmitter<Station[]>();
  stationsList: Station[] = [];

  constructor() { 
    this.stationsList = STATIONSLIST;
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }


  isSelected(item: Station): boolean {
    return this.selectedElements.includes(item);
  }


  onChange(change: MatSelectionListChange) {
    let selectedItems: Station[] = change.source.selectedOptions.selected.map(item => item.value);
    this.selectionChange.emit(selectedItems);
  }


}

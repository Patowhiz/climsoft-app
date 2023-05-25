import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { MatLegacySelectionListChange as MatSelectionListChange } from '@angular/material/legacy-list';
import { Element } from '../../models/element.model';

export const ELEMENTSLIST: Element[] = [
  { id: 1, name: 'Minimum Temperature' },
  { id: 2, name: 'Maximum Temperature' },
  { id: 3, name: 'Rainfall' },
  { id: 4, name: 'Humidity' }
];

@Component({
  selector: 'app-ucr-multiple-elements-selector',
  templateUrl: './ucr-multiple-elements-selector.component.html',
  styleUrls: ['./ucr-multiple-elements-selector.component.css']
})
export class UcrMultipleElementsSelectorComponent implements OnInit, OnChanges {

  @Input() selectedElements: Element[] = [];
  @Output() selectionChange = new EventEmitter<Element[]>();
  elementsList: Element[] = [];

  constructor() { 
    this.elementsList = ELEMENTSLIST;
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }


  isSelected(item: Element): boolean {
    return this.selectedElements.includes(item);
  }

  onChange(change: MatSelectionListChange) {
    let selectedItems: Element[] = change.source.selectedOptions.selected.map(item => item.value);
    this.selectionChange.emit(selectedItems);
  }


}

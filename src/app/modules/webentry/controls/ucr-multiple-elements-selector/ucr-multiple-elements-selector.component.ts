import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { MatSelectionListChange } from '@angular/material/list';
import { Element } from '../../models/element.model';
import { ELEMENTSLIST } from '../../mockdata/mockdata-list.mock';

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

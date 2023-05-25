import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';

import { Element } from '../../models/element.model';

export const ELEMENTSLIST: Element[] = [
  { id: 1, name: 'Minimum Temperature' },
  { id: 2, name: 'Maximum Temperature' },
  { id: 3, name: 'Rainfall' },
  { id: 4, name: 'Humidity' }
];

@Component({
  selector: 'app-ucr-single-elements-selector',
  templateUrl: './ucr-single-elements-selector.component.html',
  styleUrls: ['./ucr-single-elements-selector.component.css']
})
export class UcrSingleElementsSelectorComponent implements OnInit, OnChanges {

  @Input() selectedElement!: Element;
  @Input() elementIdsFilter!: number[];
  @Output() selectionChange = new EventEmitter<Element>();
  elements: Element[];

  constructor() {
    //todo. load from the server
    this.elements = ELEMENTSLIST;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.elementIdsFilter && this.elementIdsFilter.length > 0) {
      let newElements: Element[] = [];
      this.elements.forEach(element => {
        if (this.elementIdsFilter.includes(element.id)) {
          newElements.push(element);
        }
      });

      this.elements = newElements;
    }
  }

  ngOnInit(): void {
    //if no element is selected then select the first element by default
    if (this.elements.length > 0 && !this.selectedElement) {
      this.onChange(this.elements[0]);
    }
  }

  onChange(change: any) {
    this.selectedElement = change;
    this.selectionChange.emit(change);
  }

}

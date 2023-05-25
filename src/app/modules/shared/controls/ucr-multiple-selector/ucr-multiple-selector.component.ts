
import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import {  MatSelectionListChange as MatSelectionListChange } from '@angular/material/list';


@Component({
  selector: 'app-ucr-multiple-selector',
  templateUrl: './ucr-multiple-selector.component.html',
  styleUrls: ['./ucr-multiple-selector.component.css']
})
export class UcrMultipleSelectorComponent implements OnInit, OnChanges {

  @Input() dataSource: any[] = [];
  @Input() valueMember!: string;
  @Input() displayMember!: string ;
  @Input() selectionLabel: string = "";
  @Input() selectedItems: any[]=[]; 
  @Output() selectionChange = new EventEmitter<any[]>();

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    // changes.prop contains the old and the new value...
    //todo.
  }

  isSelected(item: string): boolean {
    return this.selectedItems.includes(item);
  }


  onChange(change: MatSelectionListChange) {
    let selectedItems: any[] = change.source.selectedOptions.selected.map(item => item.value);
    this.selectionChange.emit(selectedItems);
  }



}

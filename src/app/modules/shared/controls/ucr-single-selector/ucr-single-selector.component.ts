
import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { MatSelectChange as MatSelectChange } from '@angular/material/select';


@Component({
  selector: 'app-ucr-single-selector',
  templateUrl: './ucr-single-selector.component.html',
  styleUrls: ['./ucr-single-selector.component.css']
})
export class UcrSingleSelectorComponent implements OnInit, OnChanges {

  @Input() dataSource: any[] = [];
  @Input() valueMember!: string;
  @Input() displayMember!: string ;
  @Input() selectionLabel: string = "";
  @Input() selectedItem: any; 

  //todo. later we can support other events like SelectedIndexChanged or SelectedValueChnged
  @Output() selectionChange = new EventEmitter<any[]>();

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  onChange(change: MatSelectChange) {
    this.selectionChange.emit(change.value);
  }

}

import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-selector-input',
  templateUrl: './selector-input.component.html',
  styleUrls: ['./selector-input.component.scss']
})
export class SelectorInputComponent implements OnInit, OnChanges {
  @Input() controlLabel: string = "Select";
  @Input() editable: boolean = false;
  @Input() dataSource!: any[];
  @Input() valueMember: string = "id";
  @Input() displayMember: string = "name";
  @Input() filter!: number[];
  @Input() value!: number;

  @Output() valueChanged = new EventEmitter<any>();


  selectedObject: any;
  dataSourceUsed!: any[];

  constructor() {
  }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    
    if (this.dataSource === undefined) {
      return;
    }

    this.dataSourceUsed = this.dataSource;

    //if filter provided
    if (this.valueMember !== undefined && this.filter !== undefined && this.filter.length > 0 && this.dataSourceUsed.length > 0) {
      //todo. this assumes the filter is always a number array
      //later modify to allow a filter that is an array of objects to cater for flexibility of supplied filter
      this.dataSourceUsed = this.dataSource.filter(obj => this.filter.includes(obj[this.valueMember]));
    }

    //if item to select provided then change the selection
    if (this.valueMember !== undefined && this.value !== undefined && this.dataSourceUsed.length > 0) {
      //todo. this assumes that value passed to select is a number that should be matched with value member
      //later modified to allow the selection be by an object
      this.selectedObject = this.dataSourceUsed.find(obj => obj[this.valueMember] === this.value);
    }
  }

  onChange(itemSelected: any) {
    this.valueChanged.emit(itemSelected);
  }
}

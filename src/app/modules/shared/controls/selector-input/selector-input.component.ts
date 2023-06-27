import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-selector-input',
  templateUrl: './selector-input.component.html',
  styleUrls: ['./selector-input.component.scss']
})
export class SelectorInputComponent implements OnInit, OnChanges {
  
  @Input() controlLabel: string = "Select";
  @Input() editable: boolean = false;
  @Input() multiple: boolean = false;
  //enforce the data source to be of key value
  @Input() dataSource!: { [key: string]: any }[];
  @Input() valueMember: string = "id";
  @Input() displayMember: string = "name";

  //value should be an array if multiple is true. 
  //value should be an object if mutliple is false. 
  //if the above is not well set then the value will not be displayed.
  //note the value is defined as type 'any' because it can accept numbers, strings, key value object
  //see example https://stackblitz.com/edit/ng-select?file=app%2Fapp.component.ts
  @Input() value!: any ;
  @Output() valueChange = new EventEmitter<any >();

  constructor() {
  }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    //console.log("selector ngOnChanges", changes);

  }

  onChange(selectedObject: any) {
    //updated the value. Important for the editable selector
    //console.log("selector onChange",this.value);
    this.value = selectedObject;
    this.valueChange.emit(selectedObject);
  }



}

import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent implements OnInit, OnChanges {

  @Input() controlLabel: string = "";
  //format expected is ISO 8601 date format (yyyy-MM-dd) 
  @Input() value!: string;
  @Output() valueChanged = new EventEmitter<string>();


  constructor() {

  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  onInputChange(value: string) {
    console.log('Input Text:', value);
    this.valueChanged.emit(value);
  }
}

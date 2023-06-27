import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { DateUtils } from '../../utils/date-utils';

@Component({
  selector: 'app-hour-input',
  templateUrl: './hour-input.component.html',
  styleUrls: ['./hour-input.component.scss']
})
export class HourInputComponent implements OnInit, OnChanges {

  @Input() controlLabel: string ='Select Hour';
  @Input() multiple: boolean = false;
  @Input() value!: any;

  @Output() valueChange = new EventEmitter<any>();
  hours: any[];


  constructor() {
    this.hours = DateUtils.getHoursList();
  }

  ngOnInit(): void {
  }


  ngOnChanges(changes: SimpleChanges): void {
 
  }

  onChange(change: any) {
    this.valueChange.emit(change);
  }

}

import { Component, OnInit } from '@angular/core';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements OnInit {

  maxDate = new Date();

  constructor() { }

  ngOnInit(): void {
  }

  onDateChanged( event: MatDatepickerInputEvent<Date>) {
    console.log("date",event.value);
  }

}

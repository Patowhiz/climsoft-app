import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-day-input',
  templateUrl: './day-input.component.html',
  styleUrls: ['./day-input.component.scss']
})
export class DayInputComponent implements OnInit, OnChanges {
  @Input() value!: number;
  @Input() filter!: number[];
  @Output() valueChanged = new EventEmitter<any>();
  days: any[];
  selectedDayObject!: any[];

  constructor() {
    this.days = this.getAllDays();
  }

  ngOnInit(): void {
  }


  ngOnChanges(changes: SimpleChanges): void {
  }

  private getAllDays(): any[] {
    const all: any[] = [];
    for (let i = 1; i <= 31; i++) {
      all.push({ id: i, name: `Day ${i.toString().padStart(2, '0')}` });
    }
    return all;
  }


  onChange(change: any) {
    this.valueChanged.emit(change);
  }

}

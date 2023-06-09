import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-hour-input',
  templateUrl: './hour-input.component.html',
  styleUrls: ['./hour-input.component.scss']
})
export class HourInputComponent implements OnInit, OnChanges {
  @Input() value!: number;
  @Input() filter!: number[];
  @Output() valueChanged = new EventEmitter<any>();
  hours: any[];


  constructor() {
    this.hours = this.getAllHours();
  }

  ngOnInit(): void {
  }


  ngOnChanges(changes: SimpleChanges): void {
 
  }

  private getAllHours(): any[] {
    const all: any[] = [];
    for (let i = 0; i <= 23; i++) {
      const name = `Hour ${i.toString().padStart(2, '0')}`;
      all.push({ id: i, name: name });
    }
    return all;
  }


  onChange(change: any) {
    this.valueChanged.emit(change);
  }

}

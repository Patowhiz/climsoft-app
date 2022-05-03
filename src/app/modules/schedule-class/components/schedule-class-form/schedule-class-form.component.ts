import { BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { ScheduleClass } from './../../../../data/interface/schedule-class';
import { Component, OnInit, Input } from '@angular/core';
import { Station } from '@data/interface/station';

@Component({
  selector: 'app-schedule-class-form',
  templateUrl: './schedule-class-form.component.html',
  styleUrls: ['./schedule-class-form.component.scss']
})
export class ScheduleClassFormComponent implements OnInit {
  @Input() scheduleClass: ScheduleClass | undefined;
  @Input() fromStation!: any | undefined;
  public onClose: Subject<any> = new Subject();
  form!: FormGroup;
  submitted = false;

  station!: Partial<Station> | undefined;

  constructor(private dialogRef: BsModalRef) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      refers_to: new FormControl('', Validators.required),
      schedule_class: new FormControl('', Validators.required),
      description: new FormControl('')
    });

    if(this.scheduleClass) {
      this.form.patchValue(this.scheduleClass);
      this.f['schedule_class'].disable();
      this.station = { station_name: this.scheduleClass.refers_to, station_id: +this.scheduleClass.refers_to };
    }
  }

  get update(): boolean {
    return !!this.scheduleClass;
  }

  get f() {
    return this.form.controls;
  }

  onStationSelect(data: Station) {
    this.station = data;
    this.form.controls['refers_to'].setValue(data.station_id);
  }

  resetStation() {
    this.station = undefined;
    this.form.controls['station'].reset();
  }

  public onSubmit(e: Event): void {
    this.submitted = true;
    if(this.form.invalid) {
      return;
    }
    this.onClose.next(this.update? ({  refers_to: this.f['refers_to'].value, description: this.f['description'].value }) : this.form.value);
    this.dialogRef.hide();
  }

  public onCancel(): void {
    this.onClose.next(false);
    this.dialogRef.hide();
  }
}

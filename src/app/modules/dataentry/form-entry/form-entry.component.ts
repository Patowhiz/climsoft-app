import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Station } from '../../shared/models/station.model';
import { EntryForm } from '../../shared/models/entryform.model';
import { EntryData } from '../../shared/models/entrydata.model';
import { RepoService } from '../../shared/services/repo.service';
import { Element } from '../../shared/models/element.model';
import { ViewsDataService } from '../../shared/services/views-data.service';

export interface DataSelectorsValues {
  dataSourceId: number,
  stationId: string,
  elementId: number;
  year: number;
  month: number;
  day: number;
  hour: number;
}


@Component({
  selector: 'app-form-entry',
  templateUrl: './form-entry.component.html',
  styleUrls: ['./form-entry.component.scss']
})
export class FormEntryComponent implements OnInit {
  station!: Station;
  entryForm!: EntryForm;
  entryDataItems: EntryData[] = [];
  useDatePickerControl: boolean = false;
  defaultDatePickerDate!: string;

  //initial selector values should be -1 because we don't know what selectors are in the form metadata
  public dataSelectorsValues: DataSelectorsValues = { dataSourceId: -1, stationId: '-1', elementId: -1, year: -1, month: -1, day: -1, hour: -1 };

  constructor(private viewDataService: ViewsDataService, private repo: RepoService, private router: Router) {

    //get form entry metadata
    const navData = this.viewDataService.getViewNavigationData();
    this.station = navData['stationData'];
    this.entryForm = navData['formData'];

    //set up values used by the component and it's UI controls
    this.setInitialSelectorValues();
    this.useDatePickerControl = this.entryForm.entrySelectors.includes('year') &&
      this.entryForm.entrySelectors.includes('month') &&
      this.entryForm.entrySelectors.includes('day');

    //get the data based on the initial selector values
    this.getEntryData();

  }

  ngOnInit(): void {
  }

  private setInitialSelectorValues(): void {
   // this.dataSelectorsValues.dataSourceId = this.entryForm.dataSourceId;

    this.dataSelectorsValues.stationId = this.station.id;

    if (this.entryForm.entrySelectors.includes('elementId')) {
      this.dataSelectorsValues.elementId = this.entryForm.elements[0];
    }

    const todayDate = new Date();

    if (this.entryForm.entrySelectors.includes('year')) {
      this.dataSelectorsValues.year = todayDate.getFullYear();
    }

    if (this.entryForm.entrySelectors.includes('month')) {
      this.dataSelectorsValues.month = todayDate.getMonth() + 1;
    }

    if (this.entryForm.entrySelectors.includes('day')) {
      this.dataSelectorsValues.day = todayDate.getDate();
    }

    if (this.entryForm.entrySelectors.includes('hour')) {
      this.dataSelectorsValues.hour = this.entryForm.hours.length > 0 ? this.entryForm.hours[0] : 0;
    }

    this.defaultDatePickerDate = todayDate.toISOString().slice(0, 10)

  }

  private getEntryData(): void {
    //get the data based on the station, data source and selectors
    this.entryDataItems = this.repo.getEntryDataItems(this.dataSelectorsValues);;
  }

  public onElementChange(element: Element): void {
    this.dataSelectorsValues.elementId = element.id;
    this.getEntryData();
  }

  public onYearChange(year: any): void {
    this.dataSelectorsValues.year = year.id;
    this.getEntryData();
  }

  public onMonthChange(month: any): void {
    this.dataSelectorsValues.month = month.id;
    this.getEntryData();
  }

  public onDayChange(day: any): void {
    this.dataSelectorsValues.day = day.id;
    this.getEntryData();
  }

  public onDateChange(dateInput: string): void {
    const date = new Date(dateInput);
    this.dataSelectorsValues.year = date.getFullYear();
    this.dataSelectorsValues.month = date.getMonth() + 1;
    this.dataSelectorsValues.day = date.getDate();
    this.getEntryData();
  }

  public onHourChange(hourInput: any): void {
    this.dataSelectorsValues.hour = hourInput.id;
    this.getEntryData();
  }

  public onSave(): void {
    console.log("new values", this.entryDataItems)
    //this.repo.saveEntryData(this.entryDataItems);
  }

  public onDelete(): void {

  }

  public onClear(): void {
    this.entryDataItems = [];
  }
}

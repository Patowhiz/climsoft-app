import { Component, OnInit } from '@angular/core';
import { ENTRYDATASAMPLE, HOURSLIST } from '../mockdata/mockdata-list.mock';
import { Router } from '@angular/router';
import { Station } from '../../shared/models/station.model';
import { EntryForm } from '../../shared/models/entryform.model';
import { EntryData } from '../../shared/models/entrydata.model';
import { RepoService } from '../../shared/services/repo.service';
import { Element } from '../../shared/models/element.model';
import { ViewsDataService } from '../../shared/services/views-data.service';

export interface EntrySelectorsValues {
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
  public entrySelectorsValues: EntrySelectorsValues = { elementId: -1, year: -1, month: -1, day: -1, hour: -1 };

  constructor(private viewDataService: ViewsDataService, private repo: RepoService, private router: Router) {

    //get form entry metadata
    this.station = this.viewDataService.getViewNavigationData()['stationData'];
    this.entryForm = this.viewDataService.getViewNavigationData()['formData'];

    //set up values used by the component and it's UI controls
    this.setInitialSelectorValues();
    this.useDatePickerControl = this.checkWhetherToUseDatePickerControl();

    //get the data based on the initial selector values
    this.getEntryData();

  }

  ngOnInit(): void {
  }

  private checkWhetherToUseDatePickerControl(): boolean {
    return this.entryForm.entrySelectors.includes('year') &&
      this.entryForm.entrySelectors.includes('month') &&
      this.entryForm.entrySelectors.includes('day');
  }

  private setInitialSelectorValues(): void {

    if (this.entryForm.entrySelectors.includes('elementId')) {
      this.entrySelectorsValues.elementId = this.entryForm.elements[0];
    }

    const todayDate = new Date();

    if (this.entryForm.entrySelectors.includes('year')) {
      this.entrySelectorsValues.year = todayDate.getFullYear();
    }

    if (this.entryForm.entrySelectors.includes('month')) {
      this.entrySelectorsValues.month = todayDate.getMonth() + 1;
    }

    if (this.entryForm.entrySelectors.includes('day')) {
      this.entrySelectorsValues.day = todayDate.getDate();
    }

    if (this.entryForm.entrySelectors.includes('hour')) {
      this.entrySelectorsValues.hour = this.entryForm.hours.length > 0 ? this.entryForm.hours[0] : 0;
    }

    this.defaultDatePickerDate = todayDate.toISOString().slice(0, 10)

  }

  private getEntryData(): void {
    //get the data based on the station, data source and selectors
    this.entryDataItems = this.repo.getEntryDataItems(this.station.id, this.entryForm.dataSourceId, this.entrySelectorsValues);;
  }

  public onElementChange(element: Element): void {
    this.entrySelectorsValues.elementId = element.id;
    this.getEntryData();
  }

  public onYearChange(year: any): void {
    this.entrySelectorsValues.year = year.id;
    this.getEntryData();
  }

  public onMonthChange(month: any): void {
    this.entrySelectorsValues.month = month.id;
    this.getEntryData();
  }

  public onDayChange(day: any): void {
    this.entrySelectorsValues.day = day.id;
    this.getEntryData();
  }

  public onDateChange(dateInput: string): void {
    const date = new Date(dateInput);
    this.entrySelectorsValues.year = date.getFullYear();
    this.entrySelectorsValues.month = date.getMonth() + 1;
    this.entrySelectorsValues.day = date.getDate();
    this.getEntryData();
  }

  public onHourChange(hourInput: any): void {
    this.entrySelectorsValues.hour = hourInput.id;
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

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Station } from '../../shared/models/station.model';
import { EntryForm } from '../../shared/models/entryform.model';
import { EntryData } from '../../shared/models/entrydata.model';
import { RepoService } from '../../shared/services/repo.service';
import { Element } from '../../shared/models/element.model';
import { PagesDataService } from '../../shared/services/pages-data.service';
import { EntryDataSource } from '../../shared/models/entrydatasource.model';

export interface DataSelectorsValues {
  dataSourceId: number,
  entryForm: EntryForm,
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
  //station!: Station;
  //entrydataSource: EntryDataSource;
  entryDataItems: EntryData[] = [];
  useDatePickerControl: boolean = false;
  defaultDatePickerDate!: string;

  //initial selector values should be -1 because we don't know what selectors are in the form metadata
   dataSelectorsValues!: DataSelectorsValues ;

  entryControl : string ='';


  constructor(private viewDataService: PagesDataService, private repo: RepoService, private router: Router) {


    //this.entryForms = this.repo.getEntryForms(1);


    //get form entry metadata
    //const navData = this.viewDataService.getViewNavigationData();
    //this.station = navData['stationData'];
    //this.entrydataSource = navData['dataSourceData'];

    //set up values used by the component and it's UI controls
    this.setInitialSelectorValues();


    //get the data based on the initial selector values
    //this.getEntryData();

  }

  ngOnInit(): void {
  }

  private setInitialSelectorValues(): void {
   const dataSelectorsValues: DataSelectorsValues = {
      dataSourceId: -1,
      entryForm: {entrySelectors: [], entryFields: [], entryControl: '', elements:[], hours: [], scale: 0, formValidations: '', samplePaperImage: ''},
      stationId: '-1', elementId: -1, year: -1, month: -1, day: -1, hour: -1
    };



    dataSelectorsValues.dataSourceId = 5;
    dataSelectorsValues.entryForm = JSON.parse(this.repo.getDataSource(5).extraMetadata);
    let entryForm =  dataSelectorsValues.entryForm;

    dataSelectorsValues.stationId = '1';

    if (entryForm.entrySelectors.includes('elementId')) {
      dataSelectorsValues.elementId = entryForm.elements[0];
    }

    const todayDate = new Date();

    if (entryForm.entrySelectors.includes('year')) {
      dataSelectorsValues.year = todayDate.getFullYear();
    }

    if (entryForm.entrySelectors.includes('month')) {
      dataSelectorsValues.month = todayDate.getMonth() + 1;
    }

    if (entryForm.entrySelectors.includes('day')) {
      dataSelectorsValues.day = todayDate.getDate();
    }

    if (entryForm.entrySelectors.includes('hour')) {
      dataSelectorsValues.hour = entryForm.hours.length > 0 ? entryForm.hours[0] : 0;
    }

    this.useDatePickerControl = entryForm.entrySelectors.includes('year') &&
      entryForm.entrySelectors.includes('month') &&
      entryForm.entrySelectors.includes('day');

    if (this.useDatePickerControl) {
      this.defaultDatePickerDate = todayDate.toISOString().slice(0, 10);
    }

    this.entryControl = entryForm.entryControl;

    this.dataSelectorsValues = dataSelectorsValues;

    console.log('selectors',dataSelectorsValues);

  }

  public getStation(): Station[] {
    return this.repo.getStations([this.dataSelectorsValues.stationId]);
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

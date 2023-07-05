import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { EntryForm } from 'src/app/modules/shared/models/entryform.model';
import { EntryData } from 'src/app/modules/shared/models/entrydata.model';
import { RepoService } from 'src/app/modules/shared/services/repo.service';
import { DateUtils } from 'src/app/modules/shared/utils/date-utils';
import { DataSelectorsValues } from '../../form-entry/form-entry.component';
import { ArrayType } from '@angular/compiler';
import { ArrayUtils } from 'src/app/modules/shared/utils/array-utils';

export interface ControlDefinition {
  id: number;
  label: string;
  entryData?: EntryData;
}

// This component expects form metadata and an empty or filled array of entry data items
// If the array is filled with some entry data then it will use them to set
// the default values of the value flag controls.
// For entry data missing, new 'empty data' will be created and added to the array.
@Component({
  selector: 'app-value-flag-entry',
  templateUrl: './value-flag-entry.component.html',
  styleUrls: ['./value-flag-entry.component.scss']
})
export class ValueFlagEntryComponent implements OnInit, OnChanges {

  @Input() entryDataItems!: EntryData[];
  @Input() dataSelectorsValues!: DataSelectorsValues;
  //entryForm!: EntryForm;

  //entry controls definitions
  entryControlsDefs: ControlDefinition[] = [];

  constructor(private repo: RepoService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {

    //get control definitions
    if (this.dataSelectorsValues.entryForm.entryFields[0] === "elementId") {
      //create controls definitions the selected elements only
      //note, its not expected that all elements in the database will be set as entry fields. 
      //That should be regarded as an error in form builder design.
      //So always assume that elements selected are provided
      this.entryControlsDefs = this.getNewControlDefs(this.repo.getElements(this.dataSelectorsValues.entryForm.elements), "id", "name")
    } else if (this.dataSelectorsValues.entryForm.entryFields[0] === "day") {
      //create controls definitions days of the month only
      //note, there is no days selection in the form builder
      this.entryControlsDefs = this.getNewControlDefs(DateUtils.getDaysInMonthList(this.dataSelectorsValues.year, this.dataSelectorsValues.month), "id", "name")
    } else if (this.dataSelectorsValues.entryForm.entryFields[0] === "hour") {
      //create control definitions hours
      //note there is always hours selection in the form builder
      this.entryControlsDefs = this.getNewControlDefs(this.dataSelectorsValues.entryForm.hours.length > 0 ? DateUtils.getHours(this.dataSelectorsValues.entryForm.hours) : DateUtils.getHours(), "id", "name")
    } else {
      //Not supported yet
      this.entryControlsDefs = [];
    }

    //set control definitions entry data from the loaded data
    this.setControlDefinitionsEntryData(this.entryControlsDefs, this.entryDataItems, this.dataSelectorsValues.entryForm.entryFields[0]);

  }


  //gets an array of control definitions from the passed array
  private getNewControlDefs(entryFieldItems: any[], valueProperty: string, displayProperty: string): ControlDefinition[] {
    let controlDefs: ControlDefinition[] = [];
    for (const item of entryFieldItems) {
      controlDefs.push({ id: item[valueProperty], label: item[displayProperty], entryData: undefined })
    }
    return controlDefs;
  }

  private setControlDefinitionsEntryData(entryControlsDefs: ControlDefinition[], entryDataItems: EntryData[], entryDataField: string): void {
    //set control definitions entry data from the loaded data
    for (const controlDef of entryControlsDefs) {
      //get the entry data to be used by the control definition if it exists
      const entryData = ArrayUtils.findDataItem(entryDataItems, controlDef.id, entryDataField);
      //if entry data exists then set it as the value flag of the control definition elese set value flag as empty
      if (entryData) {
        controlDef.entryData = entryData;
      }
    }
  }


  onInputEntry(controlDef: ControlDefinition, controlNewValueFlag: any): void {

    //if there was no existing data then create new entry data and push it to the entry data arrays 
    if (!controlDef.entryData) {
      //push the new data to the array
      controlDef.entryData = this.getNewEntryData(controlDef);
      this.entryDataItems.push(controlDef.entryData);
    }

    //set the value field from the control new value
    controlDef.entryData.value = controlNewValueFlag;
    controlDef.entryData.flag = ''

    console.log('new data', controlDef);



  }

  private getNewEntryData(controlDef: ControlDefinition): EntryData {
    //create new entr data
    const entryData: EntryData = { stationId: '0', dataSourceId: 0, elementId: 0, level: 'surface', datetime: '', value: null, flag: '', qcStatus: 0, changesLog: '' };

    //set data source
    entryData.dataSourceId = this.dataSelectorsValues.dataSourceId;
    entryData.stationId = this.dataSelectorsValues.stationId;

    //set entry selector value
    if (this.dataSelectorsValues.elementId > 0) {
      entryData.elementId = this.dataSelectorsValues.elementId;
    }

    let datetimeVars: [number, number, number, number] = [-1, -1, -1, -1];
    if (this.dataSelectorsValues.year > 0) {
      datetimeVars[0] = this.dataSelectorsValues.year;
    }

    if (this.dataSelectorsValues.month > 0) {
      datetimeVars[1] = this.dataSelectorsValues.month;
    }

    if (this.dataSelectorsValues.day > 0) {
      datetimeVars[2] = this.dataSelectorsValues.day;
    }

    if (this.dataSelectorsValues.hour > -1) {
      datetimeVars[3] = this.dataSelectorsValues.hour;
    }


    //set entry field
    if (this.dataSelectorsValues.entryForm.entryFields[0] === "elementId") {
      entryData.elementId = controlDef.id;
    } else if (this.dataSelectorsValues.entryForm.entryFields[0] === "day") {
      datetimeVars[2] = controlDef.id;
    } else if (this.dataSelectorsValues.entryForm.entryFields[0] === "hour") {
      datetimeVars[3] = controlDef.id;
    } else {
      //Not supported yet
    }


    //set date from dateTime variables
    //year-month-day hour
    entryData.datetime = datetimeVars[0] + "-" +
      this.zeroPrefixedPeriod(datetimeVars[1]) + "-" +
      this.zeroPrefixedPeriod(datetimeVars[2]) + " " +
      this.zeroPrefixedPeriod(datetimeVars[3]) + ":00:00";;


    return entryData;
  }

  private zeroPrefixedPeriod(period: number): string {
    return period < 10 ? "0" + period : period.toString();
  }

}

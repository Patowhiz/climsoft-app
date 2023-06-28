import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { EntryForm } from 'src/app/modules/shared/models/entryform.model';
import { EntryData } from 'src/app/modules/shared/models/entrydata.model';
import { RepoService } from 'src/app/modules/shared/services/repo.service';
import { DateUtils } from 'src/app/modules/shared/utils/date-utils';
import { DataSelectorsValues } from '../../form-entry/form-entry.component';

export interface ControlDefinition {
  id: number;
  label: string;
  entryData: EntryData;
  valueFlag: string;
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
   @Input()entryForm!: EntryForm;

  //entry controls definitions
  entryControlsDefs: ControlDefinition[] = [];

  constructor(private repo: RepoService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.entryForm = JSON.parse(this.dataSelectorsValues.dataSource.extraMetadata);

    this.entryControlsDefs = this.getValueFlagControls(this.entryForm, this.entryDataItems);
  }


  //returns an array of controls to be used for data entry
  private getValueFlagControls(entryForm: EntryForm, entryDataItems: EntryData[]): any[] {
    let entryControlsDefs: ControlDefinition[] = [];
    //get the entry field to use
    let entryField: string = entryForm.entryFields[0];

    //--------------------------------
    //get control definitions from the collection of entry fields
    if (entryField === "elementId") {
      //create controls definitions the selected elements only
      //note, its not expected that all elements in the database will be set as entry fields. 
      //That should be regarded as an error in form builder design.
      //So always assume that elements selected are provided
      entryControlsDefs = this.getControlDefs(this.repo.getElements(this.entryForm.elements), "id", "name")
    } else if (entryField === "day") {
      //create controls definitions days of the month only
      //note, there is no days selection in the form builder
      entryControlsDefs = this.getControlDefs(DateUtils.getDaysInMonthList(this.dataSelectorsValues.year,this.dataSelectorsValues.month), "id", "name")
    } else if (entryField === "hour") {
       //create controls definitions hours
       //note there is hours selection in the form builder
      if(this.entryForm.hours.length>0){
        entryControlsDefs = this.getControlDefs( DateUtils.getHoursList([this.dataSelectorsValues.hour]), "id", "name")
      }else{
        entryControlsDefs = this.getControlDefs( DateUtils.getHoursList(), "id", "name")
      }     
    }else{
      //Not supported yet
    }
    //--------------------------------

    //--------------------------------
    //set control definitions entry data from the loaded data
    //if entry data is new, push it to the array
    entryControlsDefs.forEach(controlDef => {

      //get the entry data to be used by the control definition if it exists
      let entryData: EntryData = this.getElementFromArray(entryDataItems, entryField, controlDef.id, null) as EntryData;
      controlDef.entryData = entryData;
       //if entry data exists then set it as the value flag of the control definition elese set value flag as empty
      controlDef.valueFlag = controlDef.entryData === null ? '' : entryData.value + entryData.flag;

    });
    //--------------------------------

    return entryControlsDefs;
  }

  //gets an array of control definitions from the passed array
  private getControlDefs(arr: any[], valueMember: string, displayMember: string): any[] {
    let controlDefs: any[] = [];
    arr.forEach(element => {
      let controlDef: any = {};
      controlDef.id = element[valueMember];
      controlDef.label = element[displayMember];
      controlDefs.push(controlDef)
    });
    return controlDefs;
  }


  //todo. push to array util functions
  private getElementFromArray(elements: any[], valueMember: string, value: any, defaultReturnValue: any): any {
    return elements.find(element => element[valueMember] === value) || defaultReturnValue;
  }


  onInputEntry(controlDef: ControlDefinition, controlNewValueFlag: any): void {

    //todo. remove flag from the value
    //todo. do validations of the new value

    //if there was no existing data then create new entry data and push it to the entry data arrays 
    if (controlDef.entryData == null) {
      //push the new data to the array
      controlDef.entryData = this.getNewEntryData(controlDef);
      this.entryDataItems.push(controlDef.entryData);
    }

    //set the value field from the control new value
    controlDef.entryData.value = controlNewValueFlag;

    console.log('new data', controlDef);



  }

  private getNewEntryData(controlDef: ControlDefinition): EntryData{
    const entryData: EntryData = {
      stationId: '0',
      elementId: 0,
      dataSourceId: 0,
      level: 'surface', //todo. 
      year: 0,
      month: 0,
      day: 0,
      hour: 0,
      value: '',
      flag: '',
      paperImage: '',
      qcStatus: 0,
      changesLog: ''
    };

    //set its data source
    entryData.dataSourceId = this.dataSelectorsValues.dataSource.id;
    entryData.stationId = this.dataSelectorsValues.stationId;
    entryData.elementId = this.dataSelectorsValues.elementId;

    //get the entry field to use
    const entryField: string = this.entryForm.entryFields[0];

    if (entryField === "elementId") {
      entryData.elementId = controlDef.id;
    } else if (entryField === "day" ) {
     //todo. set date field

    } else if (entryField === "hour") {

      //todo. set date field

    }else{
      //Not supported yet
    }

    return entryData;
  }

}

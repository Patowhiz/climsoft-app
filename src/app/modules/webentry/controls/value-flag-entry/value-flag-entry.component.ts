import { Component, Input, ViewChild, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CellClickedEvent, CellValueChangedEvent, ColDef } from 'ag-grid-community';
import { DAYSLIST, ELEMENTSLIST } from '../../mockdata/mockdata-list.mock';
import { Element } from '../../models/element.model';
import { EntryData } from '../../models/entrydata.model';
import { EntryForm } from '../../models/entryform.model';

@Component({
  selector: 'app-value-flag-entry',
  templateUrl: './value-flag-entry.component.html',
  styleUrls: ['./value-flag-entry.component.scss']
})
export class ValueFlagEntryComponent implements OnInit, OnChanges {

  @Input() entryForm!: EntryForm;
  @Input() entryDataItems!: EntryData[];

  //entry controls definitions
  entryControlsDefs: any[] = [];
  elementsData: Element[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    //todo. This should load data for the elements selected only
    //should also check that all element names are unique to prevent data entry errors
    if (this.entryForm.entryFields.includes("elementId")) {
      this.elementsData = ELEMENTSLIST;
    }

    this.entryControlsDefs = this.getValueFlagControls(this.entryForm, this.entryDataItems);


  }


  private getValueFlagControls(entryForm: EntryForm,  entryDataItems: any[]): any[] {
    let entryControlsDefs: any[] = [];
    let entryField: string = entryForm.entryFields[0];


    //todo. set controls from the selected entry field

    entryDataItems.forEach(entryData => {
      let controlValueDef: any = {};
      //get the control id from the entry field. 
      controlValueDef['id'] = entryData[entryField];
      //get the control label from the entry field label
      controlValueDef['label'] = this.getControlLabel(entryField, entryData[entryField]);
      //get the control value from the value of the entry data
      controlValueDef['value'] = entryData['value'];
      entryControlsDefs.push(controlValueDef)

    });
    return entryControlsDefs;
  }

  private getControlLabel(entryField: string, controlId: any): string {

    if (entryField === "elementId") {
      return this.getPropertyValueFromArray(this.elementsData, "id", controlId);

    }
    return controlId;


  }

  private getPropertyValueFromArray(arr: any[], propertFieldName: string, propertyIdValue: any): any {
    let foundValue: any;
    arr.forEach(element => {

      if (element[propertFieldName] == propertyIdValue) {
        foundValue = element.name;
        return;
      }

    });

    return foundValue;


  }

  onInputEntry(controlIdValue: number, controlNewValue: any): void {
    console.log("new value", controlNewValue);

    let newEntryData: any = {
      stationId: 0,
      elementId: 0,
      entryFormId: 0,
      level: '',
      year: 0,
      month: 0,
      day: 0,
      hour: 0,
      value: 0,
      flag: '',
      paperImage: '',
      qcStatus: 0,
      changesLog: ''
    };

     //set the entry field value from the control id
     newEntryData[this.entryForm.entryFields[0]] = controlIdValue;
     //set the value field from the control new value
     newEntryData['value'] = controlNewValue;
 
     console.log('new data', newEntryData);



  }

}

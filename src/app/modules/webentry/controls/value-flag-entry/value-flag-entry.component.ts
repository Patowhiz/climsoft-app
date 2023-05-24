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

  //this component expects and empty or filled array of entry data items
  //if the array is filled with some entry data then it will use them to set
  //the default values of the value flag controls.
  //For entry data items missing, new items will be created and added to the array.

  @Input() entryForm!: EntryForm;
  @Input() entryDataItems!: EntryData[];

  //entry controls definitions
  entryControlsDefs: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.entryControlsDefs = this.getValueFlagControls(this.entryForm, this.entryDataItems);
  }


  //returns an array of controls to be used for data entry
  private getValueFlagControls(entryForm: EntryForm, entryDataItems: any[]): any[] {
    let entryControlsDefs: any[] = [];
    //get the entry field to use
    let entryField: string = entryForm.entryFields[0];

    //--------------------------------
    //get control definitions from the collection of entry fields
    if (entryField === "elementId") {
      //todo. This should load data for the elements selected only
      //should also check that all element names are unique to prevent data entry errors
      entryControlsDefs = this.getControlDefs(ELEMENTSLIST, "id", "name")
    } else if (entryField === "day") {

    } else if (this.entryForm.entryFields.includes("hour")) {

    }
    //--------------------------------

    //--------------------------------
    //set control definitions entry data from the loaded data
    //if entry data is new, push it to the array
    entryControlsDefs.forEach(controlDef => {

      //get the entry data to be used by the control definition if it exists
      let entryData = this.getElementFromArray(entryDataItems, entryField, controlDef['id'], null);

      if (entryData == null) {

        entryData = {
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

        //push the new data to the array
        entryDataItems.push(entryData);

       
      } 

      controlDef['entryData'] = entryData;
      controlDef['value'] = entryData['value'];

    });
    //--------------------------------

    return entryControlsDefs;
  }

  //gets an array of control definitions from the passed array
  private getControlDefs(arr: any[], idPropertyName: string, labelPropertyName: string): any[] {
    //todo. change this to an interface or class
    let controlDefs: any[] = [];
    arr.forEach(element => {
      let controlDef: any = {};
      controlDef['id'] = element[idPropertyName];
      controlDef['label'] = element[labelPropertyName];
      controlDefs.push(controlDef)
    });
    return controlDefs;
  }


  //todo. push to array util functions
  private getElementFromArray(elements: any[],
    elementPropertyNameToUseForSearchingElement: string,
    elementValueToSearch: any,
    defaultReturnValue: any): any {

    let foundValue: any = defaultReturnValue;
    elements.forEach(element => {
      if (element[elementPropertyNameToUseForSearchingElement] == elementValueToSearch) {
        foundValue = element;
        return;
      }
    });

    return foundValue;

  }

  onInputEntry(controlEntryData: any, controlNewValue: any): void {
   
    //set the value field from the control new value
    controlEntryData['value'] = controlNewValue;

    console.log('new data', controlEntryData);



  }

}

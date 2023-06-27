import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { RepoService } from '../../shared/services/repo.service';
import { EntryForm } from '../../shared/models/entryform.model';
import { Element } from '../../shared/models/element.model';
import { DateUtils } from '../../shared/utils/date-utils';
import { EntryDataSource } from '../../shared/models/entrydatasource.model';
import { ViewsDataService } from '../../shared/services/views-data.service';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent implements OnInit {
  entryDataSource: EntryDataSource;

  allEntrySelectors: { [key: string]: any }[] = [{ id: 'year', name: 'Year' }, { id: "month", name: 'Month' }, { id: 'day', name: 'Day' }, { id: 'hour', name: 'Hour' }, { id: 'elementId', name: 'Element' }];;
  allEntryFields: { [key: string]: any }[] = [];
  selectedEntrySelectors: { [key: string]: any }[] = [];
  selectedEntryFields: { [key: string]: any }[] = [];
  selectedEntryControl: string = '';
  selectedElements: Element[] = [];
  selectedHours: { [key: string]: any }[] = [];
  formName: string = '';
  formDescription: string = '';
  errorMessage: string = '';

  constructor(private viewDataService: ViewsDataService, public repo: RepoService, private location: Location) {

    this.entryDataSource = this.viewDataService.getViewNavigationData()['dataSourceData'];

    if (this.entryDataSource) {

      this.formName = this.entryDataSource.name;
      this.formDescription = this.entryDataSource.description;

      const entryForm: EntryForm = this.getEntryForm(this.entryDataSource.extraMetadata);

      //get entry selectors from the form
      for (const entrySelectorId of entryForm.entrySelectors) {
        const selectedEntrySelector = this.allEntrySelectors.find(selector => selector['id'] === entrySelectorId);
        if (selectedEntrySelector) {
          this.selectedEntrySelectors.push(selectedEntrySelector);
        }
      }
      
      //get elements and hours from the form
      this.selectedElements = this.repo.getElements( entryForm.elements);
      this.selectedHours =  DateUtils.getHoursList(entryForm.hours);

    } else {

      //create new entry data source
      this.entryDataSource = { id: 0, name: '', description: '', acquisitionTypeId: 1, extraMetadata: '' }

      //set entry selectors initial defaults
      this.selectedEntrySelectors = this.allEntrySelectors.slice(0, 4);
      this.selectedHours = DateUtils.getHoursList();

    }

    //set the control and the fields from the selectors
    this.setEntryFieldsAndControl();

  }

  ngOnInit(): void {
  }

  getEntryForm(entryFormJsonString: string): EntryForm {
    let entryForm: EntryForm;
    if (entryFormJsonString === undefined || entryFormJsonString === null || entryFormJsonString === '') {
      entryForm = {
        entrySelectors: [],
        entryFields: [],
        entryControl: '',
        elements: [],
        hours: [],
        scale: 0,
        formValidations: '',
        samplePaperImage: '',
      };
    } else {
      entryForm = JSON.parse(entryFormJsonString);
    }

    return entryForm;
  }

  //changes the possible selection of entry fields and entry control
  setEntryFieldsAndControl(): void {

    // Reset the possible entry fields to all entry selectors
    this.allEntryFields = [...this.allEntrySelectors];

    // Remove selected entry selectors from the list of selectable entry fields
    this.allEntryFields = this.allEntryFields.filter(item => !this.selectedEntrySelectors.includes(item));

    // Set the new entry fields as the selected ones
    this.selectedEntryFields = [...this.allEntryFields];
    this.setEntryControl();

  }

  setEntryControl(): void {
    if (this.selectedEntryFields.length === 1) {
      this.selectedEntryControl = 'vf';
    } else if (this.selectedEntryFields.length === 2) {
      this.selectedEntryControl = 'grid';
    } else {
      this.selectedEntryControl = '';
    }
  }

  onSave(): void {

    if (!this.entrySelectorsValid()) {
      this.errorMessage = 'Select valid entry selectors';
      return;
    }

    if (!this.entryFieldsValid()) {
      this.errorMessage = 'Select valid entry fields';
      return;
    }

    if (this.selectedElements.length === 0) {
      this.errorMessage = 'Select elements';
    }

    if (this.selectedHours.length === 0) {
      this.errorMessage = 'Select hours';
    }

    if (!this.formName) {
      this.errorMessage = 'Enter form name';
      return;
    }

    if (!this.formDescription) {
      this.errorMessage = 'Enter form description';
      return;
    }

    const entryForm: EntryForm = this.getEntryForm('');
    entryForm.entrySelectors.push(...this.selectedEntrySelectors.map(item => item['id']));
    entryForm.entryFields.push(...this.selectedEntryFields.map(item => item['id']));
    entryForm.entryControl = this.selectedEntryControl;
    entryForm.elements.push(...this.selectedElements.map(item => item.id));
    entryForm.hours.push(...this.selectedHours.map(item => item['id']));

    this.entryDataSource.acquisitionTypeId = 1;
    this.entryDataSource.name = this.formName;
    this.entryDataSource.description = this.formDescription;
    this.entryDataSource.extraMetadata = JSON.stringify(entryForm);

    //console.log("data source: ", this.entryDataSource);

    //todo. this will eventually be through subscription
    this.repo.saveDataSource(this.entryDataSource);

    //this should always just navigate back
    this.location.back();

  }

  onCancel(): void {
    this.location.back();
  }


  entrySelectorsValid(): boolean {
    //must be a minimum of 4 and maximum of 5
    return this.selectedEntrySelectors.length >= 3 && this.selectedEntrySelectors.length <= 4;
  }

  entryFieldsValid(): boolean {
    //must be a minimum of 1 or maximum of 2 depending on the selectors
    if (this.selectedEntrySelectors.length === 4) {
      return this.selectedEntryFields.length === 1;
    } else if (this.selectedEntrySelectors.length === 3) {
      return this.selectedEntryFields.length === 2;
    } else {
      return false;
    }
  }



}

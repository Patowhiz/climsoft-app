import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

import { Element } from '../models/element.model';
import { EntryForm } from '../models/entryform.model';
import { RepoService } from '../services/repo.service';
import { Station } from '../models/station.model';
import { MatStepper } from '@angular/material/stepper';
import { Location } from '@angular/common';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true },
    },
  ]
})
export class FormBuilderComponent implements OnInit,AfterViewInit {
  @ViewChild(MatStepper) stepper!: MatStepper;

  entryForm: EntryForm;

  visibleForm: string = "entrySelectors";
  subTitle: string = "";
  allEntrySelectors: any[] = [{ id: 'stationId', name: 'Station' }, { id: 'elementId', name: 'Element' }, { id: 'year', name: 'Year' }, { id: "month", name: 'Month' }, { id: 'day', name: 'Day' }, { id: 'hour', name: 'Hour' }];
  //determined by the entry selectors
  allEntryFields: any[] = [];
  formControlEntryControl: FormControl = new FormControl();
  formControlStationsControl: FormControl = new FormControl("all");
  formControlElementsControl: FormControl = new FormControl("all");
  formControlDaysControl: FormControl = new FormControl("all");
  formControlHoursControl: FormControl = new FormControl("all");
  formControlName: FormControl = new FormControl("");
  formControlDescription: FormControl = new FormControl("");

  constructor(public repo: RepoService, private location: Location) {
    this.entryForm = {
      id: 0,
      name: '',
      description: '',
      entrySelectors: [],
      entryFields: [],
      entryControl: '',
      stations: [],
      elements: [],
      hours: [],
      scale: 0,
      formValidations: '',
      samplePaperImage: '',
    };
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    //overides the stepper edit and done icon bug when using completed property
    //see issues;
    //https://github.com/angular/components/issues/7384
    //https://github.com/angular/components/issues/10513
    this.stepper._getIndicatorType = () => 'number';
  }


  //-----------------------------------------------
  //entry selectors
  onEntrySelectorsSelected(selectedItems: any[]) {
    //clear entry selectors
    this.entryForm.entrySelectors = [];
    //set possible entry fields to all
    this.allEntryFields = [];
    this.allEntryFields.push(...this.allEntrySelectors);

    //add selected entry selectors while setting the allowed entry fields
    selectedItems.forEach(item => {
      //add to list of selectors
      this.entryForm.entrySelectors.push(item.id);

      //remove from list of allowed fields
      let index = this.allEntryFields.indexOf(item, 0);
      if (index > -1) {
        this.allEntryFields.splice(index, 1);
      }

    });

  }

  entrySelectorsCompleted(): boolean {
    //must be a minimum of 4 and maximum of 5
    return this.entryForm.entrySelectors.length === 4 || this.entryForm.entrySelectors.length === 5;
  }
  //-----------------------------------------------

  //-----------------------------------------------
  //entry fields
  onEntryFieldsSelected(selectedItems: any[]) {
    this.entryForm.entryFields = [];
    selectedItems.forEach(item => {
      this.entryForm.entryFields.push(item.id);
    });

  }

  entryFieldsCompleted(): boolean {
    //must be a minimum of 1 or maximum of 4 depending on the selectors
    if (this.entryForm.entrySelectors.length === 4) {
      return this.entryForm.entryFields.length === 2;
    } else if (this.entryForm.entrySelectors.length === 5) {
      return this.entryForm.entryFields.length === 1;
    } else {
      return false;
    }
  }
  //-----------------------------------------------

  //-----------------------------------------------
  //entry fields
  entryControlCompleted(): boolean {
    if (this.formControlEntryControl.value) {
      this.entryForm.entryControl = this.formControlEntryControl.value;
      return true;
    } else {
      return false;
    }
  }
  //-----------------------------------------------

  //-----------------------------------------------
  //stations
  onStationsSelected(selectedItems: Station[]): void {
    this.entryForm.stations = [];
    selectedItems.forEach(item => {
      this.entryForm.stations.push(item.id);
    });

  }

  entryStationsCompleted(): boolean {
    if (!this.formControlStationsControl.value) {
      return false;
    }

    if (this.formControlStationsControl.value === 'all') {
      this.entryForm.stations = [];
      return true;
    } else if (this.formControlStationsControl.value === 'selected') {
      return this.entryForm.stations.length > 0;
    } else {
      return false;
    }
  }
  //-----------------------------------------------

  //-----------------------------------------------
  //elements
  public onElementsSelected(selectedItems: Element[]): void {
    this.entryForm.elements = [];
    selectedItems.forEach(item => {
      this.entryForm.elements.push(item.id);
    });

  }

  entryElementsCompleted(): boolean {
    if (!this.formControlElementsControl.value) {
      return false;
    }

    if (this.formControlElementsControl.value === 'all') {
      this.entryForm.elements = [];
      return true;
    } else if (this.formControlElementsControl.value === 'selected') {
      return this.entryForm.elements.length > 0;
    } else {
      return false;
    }
  }
  //-----------------------------------------------

  //-----------------------------------------------
  //hours
  onHoursSelected(selectedItems: number[]) {
    this.entryForm.hours = [];
    selectedItems.forEach(item => {
      this.entryForm.hours.push(item);
    });
  }

  entryHoursCompleted(): boolean {
    if (!this.formControlHoursControl.value) {
      return false;
    }

    if (this.formControlHoursControl.value === 'all') {
      this.entryForm.hours = [];
      return true;
    } else if (this.formControlHoursControl.value === 'selected') {
      return this.entryForm.hours.length > 0;
    } else {
      return false;
    }
  }
  //-----------------------------------------------

  //-----------------------------------------------
  //form save
  onSaveFormSubmitted(): void {

    if (!this.formControlName.value || !this.formControlDescription.value) {
      return;
    }

    this.entryForm.name = this.formControlName.value;
    this.entryForm.description = this.formControlDescription.value;


    console.log("form",  this.entryForm);

    //todo. this will eventually be through subscription
    this.repo.saveEntryForm(this.entryForm);

    //this should always just navigate back
    this.location.back();

    //this.router.navigate(['/webentry/viewforms'])

  }

  //-----------------------------------------------
















}

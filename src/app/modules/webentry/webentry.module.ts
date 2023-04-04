
import { NgModule } from '@angular/core';
import { WebEntryRoutingModule } from './webentry-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



//------- app forms components -------
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { DataGridEntryComponent } from './controls/data-grid-entry/data-grid-entry.component';
import { ViewEntryFormsComponent } from './view-entry-forms/view-entry-forms.component';
//------------------------------------

//------- app controls ----------
import { UcrSingleSelectorComponent } from './controls/ucr-single-selector/ucr-single-selector.component';
import { UcrSingleStationSelectorComponent } from './controls/ucr-single-station-selector/ucr-single-station-selector.component';
import { UcrSingleElementsSelectorComponent } from './controls/ucr-single-elements-selector/ucr-single-elements-selector.component';
import { UcrSingleYearSelectorComponent } from './controls/ucr-single-year-selector/ucr-single-year-selector.component';
import { UcrSingleMonthSelectorComponent } from './controls/ucr-single-month-selector/ucr-single-month-selector.component';
import { UcrSingleDaySelectorComponent } from './controls/ucr-single-day-selector/ucr-single-day-selector.component';
import { UcrSingleHourSelectorComponent } from './controls/ucr-single-hour-selector/ucr-single-hour-selector.component';
import { UcrMultipleSelectorComponent } from './controls/ucr-multiple-selector/ucr-multiple-selector.component';
import { UcrMultipleElementsSelectorComponent } from './controls/ucr-multiple-elements-selector/ucr-multiple-elements-selector.component';
import { UcrTableComponent } from './controls/ucr-table/ucr-table.component';

//----------------------------------

//------- angular material components -------
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
//--------------------------------

//------- other packages components -------
import { AgGridModule } from 'ag-grid-angular';
import { FormEntryComponent } from './form-entry/form-entry.component';
import { UcrMultipleStationsSelectorComponent } from './controls/ucr-multiple-stations-selector/ucr-multiple-stations-selector.component';
import { UcrMultipleHoursSelectorComponent } from './controls/ucr-multiple-hours-selector/ucr-multiple-hours-selector.component';
import { UcrMultipleDaysSelectorComponent } from './controls/ucr-multiple-days-selector/ucr-multiple-days-selector.component';
import { ValueFlagEntryComponent } from './controls/value-flag-entry/value-flag-entry.component';
//--------------------------------


@NgModule({

  declarations: [
    FormBuilderComponent,
    UcrMultipleSelectorComponent,
    UcrMultipleElementsSelectorComponent,
    DataGridEntryComponent,
    UcrSingleSelectorComponent,
    UcrSingleStationSelectorComponent,
    UcrSingleElementsSelectorComponent,
    UcrSingleYearSelectorComponent,
    UcrSingleMonthSelectorComponent,
    UcrSingleDaySelectorComponent,
    UcrSingleHourSelectorComponent,
    ViewEntryFormsComponent,
    UcrTableComponent,
    FormEntryComponent,
    UcrMultipleStationsSelectorComponent,
    UcrMultipleHoursSelectorComponent,
    UcrMultipleDaysSelectorComponent,
    ValueFlagEntryComponent

  ],
  imports: [
    CommonModule,
    WebEntryRoutingModule,

    ReactiveFormsModule,
    FormsModule,

    MatFormFieldModule,
    MatRadioModule,
    MatButtonModule,
    MatListModule,
    MatGridListModule,
    MatSelectModule,
    MatInputModule,
    MatTableModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,

    AgGridModule

  ]
})
export class WebEntryModule { }

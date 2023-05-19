
import { NgModule } from '@angular/core';
import { WebEntryRoutingModule } from './webentry-routing.module';
import { SharedModule } from '../shared/shared.module';

//------- other packages modules  -------
import { AgGridModule } from 'ag-grid-angular';
//--------------------------------

//------- app forms components -------
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { DataGridEntryComponent } from './controls/data-grid-entry/data-grid-entry.component';
import { ViewEntryFormsComponent } from './view-entry-forms/view-entry-forms.component';
import { FormEntryComponent } from './form-entry/form-entry.component';
import { ImportEntryComponent } from './import-entry/import-entry.component';
import { ValueFlagEntryComponent } from './controls/value-flag-entry/value-flag-entry.component';
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
import { UcrMultipleStationsSelectorComponent } from './controls/ucr-multiple-stations-selector/ucr-multiple-stations-selector.component';
import { UcrMultipleHoursSelectorComponent } from './controls/ucr-multiple-hours-selector/ucr-multiple-hours-selector.component';
import { UcrMultipleDaysSelectorComponent } from './controls/ucr-multiple-days-selector/ucr-multiple-days-selector.component';
//----------------------------------


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
    ValueFlagEntryComponent,
    ImportEntryComponent

  ],
  imports: [
    WebEntryRoutingModule,
    SharedModule,
    AgGridModule
  ]
})
export class WebEntryModule { }

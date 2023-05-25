//------- angular mmodules------------------------
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//--------------------------------

//------- material modules -------
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyRadioModule as MatRadioModule } from '@angular/material/legacy-radio';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacyTableModule as MatTableModule } from '@angular/material/legacy-table';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatStepperModule } from '@angular/material/stepper';
import { MatLegacyTabsModule as MatTabsModule } from '@angular/material/legacy-tabs';
import { MatDividerModule } from '@angular/material/divider';
import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
//--------------------------------

//--------- components ------------
import { PaginatorComponent } from './controls/paginator/paginator.component';
import { UcrSingleSelectorComponent } from './controls/ucr-single-selector/ucr-single-selector.component';
import { UcrSingleStationSelectorComponent } from './controls/ucr-single-station-selector/ucr-single-station-selector.component';
import { UcrSingleElementsSelectorComponent } from './controls/ucr-single-elements-selector/ucr-single-elements-selector.component';
import { UcrSingleYearSelectorComponent } from './controls/ucr-single-year-selector/ucr-single-year-selector.component';
import { UcrSingleMonthSelectorComponent } from './controls/ucr-single-month-selector/ucr-single-month-selector.component';
import { UcrSingleDaySelectorComponent } from './controls/ucr-single-day-selector/ucr-single-day-selector.component';
import { UcrSingleHourSelectorComponent } from './controls/ucr-single-hour-selector/ucr-single-hour-selector.component';
import { UcrMultipleSelectorComponent } from './controls/ucr-multiple-selector/ucr-multiple-selector.component';
import { UcrMultipleElementsSelectorComponent } from './controls/ucr-multiple-elements-selector/ucr-multiple-elements-selector.component';
import { UcrMultipleStationsSelectorComponent } from './controls/ucr-multiple-stations-selector/ucr-multiple-stations-selector.component';
import { UcrMultipleHoursSelectorComponent } from './controls/ucr-multiple-hours-selector/ucr-multiple-hours-selector.component';
import { UcrMultipleDaysSelectorComponent } from './controls/ucr-multiple-days-selector/ucr-multiple-days-selector.component';
import { DatePickerComponent } from './controls/date-picker/date-picker.component';

//--------------------------------

const angularModules = [
  CommonModule,
  ReactiveFormsModule,
  FormsModule
];

const materialModules = [
  MatIconModule,
  MatButtonModule,
  MatListModule,
  MatFormFieldModule,
  MatRadioModule,
  MatGridListModule,
  MatSelectModule,
  MatInputModule,
  MatTableModule,
  MatCardModule,
  MatStepperModule,
  MatTabsModule,
  MatDividerModule,
  MatMenuModule,
  MatExpansionModule,
  MatDatepickerModule,
  MatNativeDateModule

];
//--------------------------------

const controlsComponents = [
  PaginatorComponent,
  UcrMultipleSelectorComponent,
  UcrMultipleElementsSelectorComponent,
  UcrSingleSelectorComponent,
  UcrSingleStationSelectorComponent,
  UcrSingleElementsSelectorComponent,
  UcrSingleYearSelectorComponent,
  UcrSingleMonthSelectorComponent,
  UcrSingleDaySelectorComponent,
  UcrSingleHourSelectorComponent,
  UcrMultipleStationsSelectorComponent,
  UcrMultipleHoursSelectorComponent,
  UcrMultipleDaysSelectorComponent,
  DatePickerComponent
];

@NgModule({
  declarations: [
    controlsComponents
    
  ],
  imports: [
    ...angularModules,
    ...materialModules,
  ],
  exports: [
    ...angularModules,
    ...materialModules,
    ...controlsComponents
  ]
})
export class SharedModule { }

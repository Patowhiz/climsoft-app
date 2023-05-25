
import { NgModule } from '@angular/core';
import { WebEntryRoutingModule } from './webentry-routing.module';
import { SharedModule } from '../shared/shared.module';

//------- other packages modules  -------
// import { AgGridModule } from 'ag-grid-angular';
//--------------------------------

//------- app forms components -------
import { DataGridEntryComponent } from './controls/data-grid-entry/data-grid-entry.component';
import { ViewEntryFormsComponent } from './view-entry-forms/view-entry-forms.component';
import { FormEntryComponent } from './form-entry/form-entry.component';
import { ImportEntryComponent } from './import-entry/import-entry.component';
import { ValueFlagEntryComponent } from './controls/value-flag-entry/value-flag-entry.component';
import { ViewEntryStationsComponent } from './view-entry-stations/view-entry-stations.component';
//------------------------------------



@NgModule({

  declarations: [
    DataGridEntryComponent,
    ViewEntryFormsComponent,
    FormEntryComponent,
    ValueFlagEntryComponent,
    ImportEntryComponent,
    ViewEntryStationsComponent
  ],
  imports: [
    WebEntryRoutingModule,
    SharedModule,
    // AgGridModule
  ]
})
export class WebEntryModule { }

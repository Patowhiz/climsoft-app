import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormEntryComponent } from './form-entry/form-entry.component';
import { ViewEntryFormsComponent } from './view-entry-forms/view-entry-forms.component';
import { ImportEntryComponent } from './import-entry/import-entry.component';
import { ViewEntryStationsComponent } from './view-entry-stations/view-entry-stations.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Data Entry'
    },
    children: [
      {
        path: '',
        redirectTo: 'stations',
        pathMatch: 'full',
      },      
      {
        path: 'stations',
        component: ViewEntryStationsComponent,
        data: {
          title: 'Entry Stations'
        }
      },
      {
        path: 'forms',
        component: ViewEntryFormsComponent,
        data: {
          title: 'Entry Forms'
        }
      }, 
      {
        path: 'formentry/:formid',
        component: FormEntryComponent,
        data: {
          subComponent: true
        }
      },
      {
        path: 'importentry',
        component: ImportEntryComponent,
        data: {
          title: 'Import Data'
        }
      }
    ]
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataEntryRoutingModule { }

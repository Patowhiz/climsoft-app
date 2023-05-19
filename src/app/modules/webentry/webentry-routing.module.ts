import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormDirtyGuard } from '../auth/guards/form-dirty.guard';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { FormEntryComponent } from './form-entry/form-entry.component';
import { ViewEntryFormsComponent } from './view-entry-forms/view-entry-forms.component';
import { ImportEntryComponent } from './import-entry/import-entry.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Data Entry'
    },
    children: [
      {
        path: '',
        redirectTo: 'formsentry',
        pathMatch: 'full',
      },
      {
        path: 'importentry',
        component: ImportEntryComponent,
        canDeactivate: [FormDirtyGuard],
        data: {
          title: 'Import Data'
        }
      },
      {
        path: 'formsentry',
        component: ViewEntryFormsComponent,
        canDeactivate: [FormDirtyGuard],
        data: {
          title: 'Entry Forms'
        }
      },
      {
        path: 'formbuilder',
        component: FormBuilderComponent,
        canDeactivate: [FormDirtyGuard],
        data: {
          subComponent: true
        }
      }, 
      {
        path: 'formentry/:formid',
        component: FormEntryComponent,
        canDeactivate: [FormDirtyGuard],
        data: {
          subComponent: true
        }
      }
    ]
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebEntryRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormDirtyGuard } from '../auth/guards/form-dirty.guard';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { FormEntryComponent } from './form-entry/form-entry.component';
import { ViewEntryFormsComponent } from './view-entry-forms/view-entry-forms.component';
import { WebEntryBaseComponent } from './web-entry-base/web-entry-base.component';

const routes: Routes = [{
  path: '',
  component: WebEntryBaseComponent,
  data: {
    title: 'Data Entry'
  },
  children: [
    {
      path: '',
      redirectTo: 'viewforms',
      pathMatch: 'full',
      data: {
        title: 'Data Entry'
      }
    },
    {
      path: 'viewforms',
      component: ViewEntryFormsComponent,
      canDeactivate: [FormDirtyGuard],
      data: {
        title: 'View Entry Forms'
      }
    },
    {
      path: 'formbuilder',
      component: FormBuilderComponent,
      canDeactivate: [FormDirtyGuard],
      data: {
        title: 'New Entry Form'
      }
    }, 
    {
      path: 'formentry/:formid',
      component: FormEntryComponent,
      canDeactivate: [FormDirtyGuard],
      data: {
        title: 'Entry Form'
      }
    }




  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebEntryRoutingModule { }

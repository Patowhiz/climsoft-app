import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormDirtyGuard } from '../auth/guards/form-dirty.guard';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { FormsComponent } from './forms/forms.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Metadata'
    },
    children: [
      {
        path: '',
        redirectTo: 'forms',
        pathMatch: 'full',
      },
      {
        path: 'forms',
        component: FormsComponent,
        canDeactivate: [FormDirtyGuard],
        data: {
          subComponent: true
        }
      },
      {
        path: 'formbuilder',
        component: FormBuilderComponent,
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
export class MetadataRoutingModule { }

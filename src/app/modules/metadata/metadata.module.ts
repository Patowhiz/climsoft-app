import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MetadataRoutingModule } from './metadata-routing.module';

import { FormsComponent } from './forms/forms.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';



@NgModule({
  declarations: [
    FormsComponent,
    FormBuilderComponent    
  ],
  imports: [
    SharedModule,
    MetadataRoutingModule
  ]
})
export class MetadataModule { }

//------- angular mmodules------------------------
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//--------------------------------

//------- material modules -------
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';
import {MatMenuModule} from '@angular/material/menu';
import {MatExpansionModule} from '@angular/material/expansion';
//--------------------------------

//--------- components ------------
import { PaginatorComponent } from './controls/paginator/paginator.component';
//--------------------------------

const angularModules = [
  CommonModule,
  ReactiveFormsModule,
  FormsModule
]
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
  
];
//--------------------------------


@NgModule({
  declarations: [
    PaginatorComponent
  ],
  imports: [
     ...angularModules,
     ...materialModules,
  ],
  exports: [
    ...angularModules,
    ...materialModules,
    PaginatorComponent
  ]
})
export class SharedModule { }

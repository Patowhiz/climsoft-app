

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';

import { NgxMaskModule } from 'ngx-mask';
import {
  AlertModule,
  BadgeModule,
  BreadcrumbModule,
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  DropdownModule,
  FooterModule,
  FormModule,
  GridModule,
  HeaderModule,
  NavModule,
  OffcanvasModule,
  PaginationModule,
  ProgressModule,
  SidebarModule,
  SpinnerModule,
  TableModule,
  TabsModule,
  TooltipModule,
  UtilitiesModule
} from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { AlertComponent } from './dialogs/alert/alert.component';
import { ConfirmationComponent } from './dialogs/confirmation/confirmation.component';
import { PromptComponent } from './dialogs/prompt/prompt.component';
import { InfoBlockComponent } from './component/info-block/info-block.component';
import { PaginatorComponent } from './component/paginator/paginator.component';
import { StationSelectionComponent } from './component/station-selection/station-selection.component';
import { ElementSelectionComponent } from './component/element-selection/element-selection.component';
import { DataTimeComponent } from './component/data-time-selection/date-time.component';
import { NoValueComponent } from './component/no-value/no-value.component';
import { TimzoneSelectionComponent } from './component/timzone-selection/timzone-selection.component';
import { ImageUploaderComponent } from './component/image-uploader/image-uploader.component';
import { FlagPickerComponent } from './component/flag-picker/flag-picker.component';
import { FlagLegendComponent } from './component/flag-legend/flag-legend.component';
import { YearSelectorComponent } from './component/year-selector/year-selector.component';
import { InfiniteLoadingComponent } from './component/infinite-loading/infinite-loading.component';
import { StationElementSelectionComponent } from './component/station-element-selection/station-element-selection.component';


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
  MatExpansionModule
];
//--------------------------------

@NgModule({
  declarations: [
    ConfirmationComponent,
    AlertComponent,
    DataTimeComponent,
    ElementSelectionComponent,
    FlagPickerComponent,
    ImageUploaderComponent,
    InfoBlockComponent,
    PromptComponent,
    PaginatorComponent,
    NoValueComponent,
    StationSelectionComponent,
    TimzoneSelectionComponent,
    FlagLegendComponent,
    YearSelectorComponent,
    InfiniteLoadingComponent,
    StationElementSelectionComponent,
  ],
  imports: [
    //----------------------
    ...angularModules,
    ...materialModules,
    //---------------------

    AlertModule,
    BadgeModule,
    BreadcrumbModule,
    ButtonModule,
    ButtonGroupModule,
    CardModule,
    DropdownModule,
    FooterModule,
    FormModule,
    GridModule,
    HeaderModule,
    IconModule,
    ModalModule.forRoot(),
    NavModule,
    OffcanvasModule,
    PaginationModule,
    PerfectScrollbarModule,
    ProgressModule,
    SpinnerModule,
    SidebarModule,
    TabsModule,
    TableModule,
    TooltipModule,
    UtilitiesModule,

    BsDatepickerModule.forRoot(),
    BsDropdownModule,
    TimepickerModule.forRoot(),
    TypeaheadModule.forRoot(),

    NgxMaskModule.forRoot(),
    NgxDropzoneModule,


  ],
  exports: [
    //---------------------
    ...angularModules,
    ...materialModules,
    //---------------------

    NgxMaskModule,
    AlertModule,
    BadgeModule,
    BreadcrumbModule,
    ButtonModule,
    ButtonGroupModule,
    CardModule,
    DropdownModule,
    FooterModule,
    FormModule,
    GridModule,
    HeaderModule,
    IconModule,
    NavModule,
    OffcanvasModule,
    PerfectScrollbarModule,
    ProgressModule,
    SpinnerModule,
    SidebarModule,
    TabsModule,
    TableModule,
    TooltipModule,
    UtilitiesModule,

    BsDatepickerModule,
    TimepickerModule,

    //Shared Components
    InfoBlockComponent,
    NoValueComponent,

    //Shared Dialog Components
    AlertComponent,
    ConfirmationComponent,
    PromptComponent,

    //Utility Components
    FlagLegendComponent,
    PaginatorComponent,
    InfiniteLoadingComponent,


    // Custom Selector Components
    ElementSelectionComponent,
    FlagPickerComponent,
    StationSelectionComponent,
    TimzoneSelectionComponent,
    ImageUploaderComponent,

    // Custom Form Components
    YearSelectorComponent,
    DataTimeComponent
  ]
})
export class SharedModule { }

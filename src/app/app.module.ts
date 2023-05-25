//------------modules------------------------------
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';

//--------------------------------------------
import { SharedModule } from './modules/shared/shared.module';
import { MetadataModule } from './modules/metadata/metadata.module';
import { WebEntryModule } from './modules/webentry/webentry.module';
//--------------------------------------------

//------------components------------------------------
import { HomeComponent } from './home/home.component';

//--------------------------------------------


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    MatToolbarModule,
    MatSidenavModule,
    MetadataModule,
    WebEntryModule,
    
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

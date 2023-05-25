import { environment } from 'src/environments/environment';
import { ResponseInterceptor } from './modules/auth/interceptors/response.interceptor';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { HttpInterceptorService } from './modules/auth/interceptors/http.interceptor';
import { ErrorInterceptor } from './modules/auth/interceptors/error.interceptor';



//------------modules------------------------------
import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';

//--------------------------------------------
import { SharedModule } from './modules/shared/shared.module';
import { AuthModule } from './modules/auth/auth.module';
import { MetadataModule } from './modules/metadata/metadata.module';
import { WebEntryModule } from './modules/webentry/webentry.module';
//--------------------------------------------

//------------components------------------------------
import { HomeComponent } from './home/home.component';

//--------------------------------------------



@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,

    MatToolbarModule,
    MatSidenavModule,

    SharedModule,
    AuthModule,
    MetadataModule,
    WebEntryModule,

    // TranslateModule.forRoot({
    //   loader: {
    //     provide: TranslateLoader,
    //     useFactory: HttpLoaderFactory,
    //     deps: [HttpClient]
    //   }
    // }),
    // UserIdleModule.forRoot({ idle: environment.IDLE_TIME_IN_MINUTES * 60, timeout: 300 }),

 



  ],
  declarations: [AppComponent, HomeComponent],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ResponseInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }




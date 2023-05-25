import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './modules/auth/guards/auth.guard';
//import { AuthChildrenGuard } from './modules/auth/guards/auth.child.guard';

import { LoginComponent } from './modules/auth/components/login/login.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'dataentry',
        pathMatch: 'full'
      },
      {
        path: 'dataentry',
        canActivate: [AuthGuard],
        loadChildren: () => import('./modules/webentry/webentry.module').then((m) => m.WebEntryModule)
      },
      {
        path: 'metadata',
        canActivate: [AuthGuard],
        loadChildren: () => import('./modules/metadata/metadata.module').then((m) => m.MetadataModule)
      },
    ]
  },  
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login'
    }
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  },
  // {
  //   path: '404',
  //   component: Page404Component,
  //   data: {
  //     title: 'Page 404'
  //   }
  // },
  // {
  //   path: '500',
  //   component: Page500Component,
  //   data: {
  //     title: 'Page 500'
  //   }
  // }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
      initialNavigation: 'enabledBlocking'
      // relativeLinkResolution: 'legacy'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

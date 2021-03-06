import {NgModule, Component} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from './layout/main/main.component';
import {DepartmentComponent} from './modules/home/pages/department/department.component';
import {PrincipalComponent} from './modules/home/pages/principal/principal.component';
import {NewdataComponent} from './modules/home/pages/newdata/newdata.component';
import {NoticiasComponent} from './modules/home/pages/noticias/noticias.component';
import {DashboardsboliviaComponent} from './modules/home/pages/dashboardsbolivia/dashboardsbolivia.component';
import {DashboardseditComponent} from './modules/home/pages/dashboardsedit/dashboardsedit.component';
import {PredictionsComponent} from './modules/home/pages/predictions/predictions.component';
import {ProfileComponent} from './modules/home/pages/profile/profile.component';
import {CountriesComponent} from './modules/home/pages/countries/countries.component';
import {LoginComponent} from './modules/home/alerts/login/login.component';
import {NoticiasBingComponent} from './modules/home/pages/noticias-bing/noticias-bing.component';
import {AuthGuard} from './shared/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/main/principal',
    pathMatch: 'full',
  },
  {
    path: 'main',
    component: MainComponent,
    children: [
      {
        path: 'user',
        component: ProfileComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'principal',
        component: PrincipalComponent,
      },
      {
        path: 'department/:id',
        component: DepartmentComponent,
      },
      {
        path: 'data',
        component: NewdataComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'noticia',
        component: NoticiasComponent
      },
      {
        path: 'dashbolivia',
        component: DashboardsboliviaComponent
      },
      {
        path: 'dashedit',
        component: DashboardseditComponent
      },
      {
        path: 'predict',
        component: PredictionsComponent
      },
      {
        path: 'countries',
        component: CountriesComponent
      }
      ,

    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'noticiasBing',
    component: NoticiasBingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SideBarComponent} from '../../layout/side-bar/side-bar.component';
import {MainComponent} from '../../layout/main/main.component';
import {RouterModule} from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {HomeComponent} from './home.component';
import {MatSliderModule} from '@angular/material/slider';
import {NewdataComponent} from './pages/newdata/newdata.component';
import {DepartmentComponent} from './pages/department/department.component';
import {ChartsModule} from 'ng2-charts';
import {MatRippleModule} from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {PrincipalComponent} from './pages/principal/principal.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {NoticiasComponent} from './pages/noticias/noticias.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {DashboardsboliviaComponent} from './pages/dashboardsbolivia/dashboardsbolivia.component';
import {DashboardseditComponent} from './pages/dashboardsedit/dashboardsedit.component';
import {PredictionsComponent} from './pages/predictions/predictions.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {ProfileComponent} from './pages/profile/profile.component';
import {CountriesComponent} from './pages/countries/countries.component';
import {LoginComponent} from './alerts/login/login.component';
import {NoticiasBingComponent} from './pages/noticias-bing/noticias-bing.component';
import {DragScrollModule} from 'ngx-drag-scroll';
import {MatPaginatorModule} from '@angular/material/paginator';
import { AcumulatedGraphComponent } from './components/graphs/acumulated-graph/acumulated-graph.component';
import {MatSortModule} from '@angular/material/sort';
import {FooterComponent} from '../../layout/footer/footer.component';
import {MatChipsModule} from '@angular/material/chips';

@NgModule({
  declarations: [
    HomeComponent,
    SideBarComponent,
    MainComponent,
    DepartmentComponent,
    PrincipalComponent,
    DepartmentComponent,
    NewdataComponent,
    NoticiasComponent,
    DashboardsboliviaComponent,
    DashboardseditComponent,
    PredictionsComponent,
    ProfileComponent,
    CountriesComponent,
    LoginComponent,
    NoticiasBingComponent,
    AcumulatedGraphComponent,
    FooterComponent,
  ],
    imports: [
        CommonModule,
        BrowserModule,
        MatPaginatorModule,
        FormsModule,
        RouterModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        MatSliderModule,
        ChartsModule,
        MatRippleModule,
        MatButtonModule,
        MatListModule,
        MatTableModule,
        MatFormFieldModule,
        MatSelectModule,
        MatGridListModule,
        MatInputModule,
        MatMenuModule,
        MatStepperModule,
        MatCardModule,
        MatSlideToggleModule,
        MatDatepickerModule,
        MatNativeDateModule,
        ReactiveFormsModule,
        DragScrollModule,
        MatSortModule,
        MatChipsModule
    ],
  entryComponents: [],
})
export class HomeModule {
}

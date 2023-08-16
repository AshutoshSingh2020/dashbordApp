import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { FooterModule } from 'src/app/layout/footer/footer.module';
import { RouterModule, Routes } from '@angular/router';
import { AppContainerComponent } from './app-container.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarModule } from 'src/app/layout/navbar/navbar.module';
import { SidebarModule } from 'src/app/layout/sidebar/sidebar.module';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';

import { ChartComponent } from '../chart/chart.component';
import { DashboardPageComponent } from '../dashboard-page/dashboard-page.component';
import { CreateUserComponent } from '../user/create-user/create-user.component';
import { UserTableComponent } from '../user/user-table/user-table.component';
import { RegisterComponent } from 'src/app/credentials-pages/register/register.component';
import { ForgetPasswordComponent } from 'src/app/credentials-pages/forget-password/forget-password.component';
import { CounterComponent } from '../counter/counter.component';

// Angular material
import { MatTableModule } from '@angular/material/table';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonToggleGroup, MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import {MatSidenav, MatSidenavModule} from '@angular/material/sidenav';


const routes: Routes = [
  {
    path: '', component: AppContainerComponent, children: [ 
      { path: 'dashboard', component: DashboardPageComponent },
      { path: 'chart', component: ChartComponent },
      { path: 'counter', component: CounterComponent },
      { path: 'user/user-table', component: UserTableComponent },
      { path: 'user/create-user', component: CreateUserComponent },
      { path: 'forgot-password', component: ForgetPasswordComponent },
    ]
  }
]

@NgModule({
  declarations: [
    AppContainerComponent,
    DashboardPageComponent,
    UserTableComponent,
    CreateUserComponent,
    ChartComponent,
    RegisterComponent,
    ForgetPasswordComponent
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule,
    NavbarModule,
    
    SidebarModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 3000
    }),
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' }),
    // RegisterModule,

    // material import
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatSidenavModule
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'en-GB' }],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppContainerModule { }

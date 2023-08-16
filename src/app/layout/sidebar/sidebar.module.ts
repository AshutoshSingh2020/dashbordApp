import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FooterModule } from 'src/app/layout/footer/footer.module';
// import { FooterComponent } from '../footer/footer.component';

const routes: Routes = [
  { path: '', component: SidebarComponent},
]

@NgModule({
  declarations: [
    SidebarComponent,
       
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule,
    FooterModule,
  ],
  exports: [RouterModule, SidebarComponent],  
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class SidebarModule { }

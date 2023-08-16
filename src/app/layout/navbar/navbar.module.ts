import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule, NgStyle } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Angular material
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { NavbarComponent } from './navbar.component';
// import { ForgetPasswordComponent } from 'src/app/credentials-pages/forget-password/forget-password.component';
import { FirstLetterPipe } from 'src/app/custom-pipe/firstletter.pipe';
const routes: Routes = [
  { path: '', component: NavbarComponent},
  // { path: 'forgot-password', component: ForgetPasswordComponent}
 
]

@NgModule({
  declarations: [
    NavbarComponent,
    FirstLetterPipe
    // ForgetPasswordComponent
  
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule,    
    MatAutocompleteModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    NgStyle
  ],
  exports: [RouterModule, NavbarComponent],  
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class NavbarModule { }

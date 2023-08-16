import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppContainerModule } from './routes/app-container/app-container.module';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './state/counter.reducer';
import { CounterComponent } from './routes/counter/counter.component';



@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    AppContainerModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({counter: counterReducer}, {}),
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

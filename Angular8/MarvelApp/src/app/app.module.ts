import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MaterialModule} from './material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {HttpClientModule} from '@angular/common/http';
import { CreditCardDirectivesModule } from 'angular-cc-library';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CreditCardDirectivesModule
  ],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS ,useValue: {displayDefaultIndicatorType: false}

  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

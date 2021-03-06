import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TrackingNumberFieldComponent } from './tracking-number-field/tracking-number-field.component';
import { WeightFieldComponent } from './weight-field/weight-field.component';
import { ParcelTypeFieldComponent } from './parcel-type-field/parcel-type-field.component';
import { IndexFieldComponent } from './index-field/index-field.component';
import { BaseFieldComponent } from './base-field/base-field.component';
import { RecipientFieldComponent } from './recipient-field/recipient-field.component';
import { ParcelFormComponent } from './parcel-form/parcel-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TrackingNumberFieldComponent,
    WeightFieldComponent,
    ParcelTypeFieldComponent,
    IndexFieldComponent,
    BaseFieldComponent,
    RecipientFieldComponent,
    ParcelFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

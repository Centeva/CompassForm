import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import {
  CompassFormModule,
  CompassFieldComponents
} from "projects/compass-form/src/public_api";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CustomControlComponent } from "./customControl/customControl.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "projects/compass-form/src/lib/material.module";

@NgModule({
  declarations: [AppComponent, CustomControlComponent],
  imports: [
    BrowserModule,
    CompassFormModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [
    {
      provide: CompassFieldComponents,
      useValue: CustomControlComponent,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  entryComponents: [CustomControlComponent]
})
export class AppModule {}

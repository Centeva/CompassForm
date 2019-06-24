import { NgModule } from "@angular/core";

import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatSelectModule } from "@angular/material/select";
import { MatRadioModule } from "@angular/material/radio";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatOptionModule, MAT_DATE_FORMATS } from "@angular/material/core";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatDatepickerModule } from "@angular/material/datepicker";

import {
  MatMomentDateModule,
  MAT_MOMENT_DATE_FORMATS,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS
} from "@angular/material-moment-adapter";

const modules = [
  MatSelectModule,
  MatRadioModule,
  MatCheckboxModule,
  MatInputModule,
  MatFormFieldModule,
  MatOptionModule,
  MatDatepickerModule,
  MatMomentDateModule,
  MatAutocompleteModule
];

@NgModule({
  imports: modules,
  exports: modules,
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
    { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } }
  ]
})
export class MaterialModule {}

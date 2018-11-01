import { NgModule } from '@angular/core';

import {
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatOptionModule,
    MatRadioModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MAT_DATE_FORMATS,
    MatAutocompleteModule,
} from '@angular/material';

import { MatMomentDateModule, MAT_MOMENT_DATE_FORMATS, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';

const modules = [
  MatSelectModule,
  MatRadioModule,
  MatCheckboxModule,
  MatInputModule,
  MatFormFieldModule,
  MatOptionModule,
  MatDatepickerModule,
  MatMomentDateModule,
  MatAutocompleteModule,
];

@NgModule({
    imports: modules,
    exports: modules,
    providers: [
        { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
        { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } },
    ],
})
export class MaterialModule {}

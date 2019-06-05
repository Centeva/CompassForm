import { NgModule, InjectionToken, Type } from "@angular/core";
import { CommonModule as NgCommon } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { CompassStringControlComponent } from "./compass-string-control/compass-string-control.component";
import { CompassNumberControlComponent } from "./compass-number-control/compass-number-control.component";
import { CompassSelectControlComponent } from "./compass-select-control/compass-select-control.component";
import { CompassAutoCompleteControlComponent } from "./compass-auto-complete-control/compass-auto-complete-control.component";
import { CompassRadioGroupControlComponent } from "./compass-radio-group-control/compass-radio-group-control.component";
import { CompassTextareaControlComponent } from "./compass-textarea-control/compass-textarea-control.component";
import { CompassDateControlComponent } from "./compass-date-control/compass-date-control.component";
import { CompassDollarControlComponent } from "./compass-dollar-control/compass-dollar-control.component";
import { CompassEstimatedDollarControlComponent } from "./compass-estimated-dollar-control/compass-estimated-dollar-control.component";
import { CompassCheckboxControlComponent } from "./compass-checkbox-control/compass-checkbox-control.component";
import { CompassFormComponent } from "./compass-form/compass-form.component";
import { CompassFormItemComponent } from "./compass-form-item/compass-form-item.component";
import { MaterialModule } from "./material.module";
import { DollarInputComponent } from "./compass-dollar-control/dollar-input.component";
import { CompassHiddenControlComponent } from "./compass-hidden-control/compass-hidden-control.component";
import { CompassFieldComponents } from "./compass-field-components";

@NgModule({
  declarations: [
    CompassFormComponent,
    CompassFormItemComponent,
    CompassStringControlComponent,
    CompassNumberControlComponent,
    CompassSelectControlComponent,
    CompassAutoCompleteControlComponent,
    CompassRadioGroupControlComponent,
    CompassTextareaControlComponent,
    CompassDateControlComponent,
    CompassDollarControlComponent,
    CompassEstimatedDollarControlComponent,
    CompassCheckboxControlComponent,
    CompassHiddenControlComponent,
    DollarInputComponent
  ],
  imports: [NgCommon, ReactiveFormsModule, FormsModule, MaterialModule],
  exports: [CompassFormComponent, CompassFormItemComponent],
  providers: [
    {
      provide: CompassFieldComponents,
      useValue: CompassStringControlComponent,
      multi: true
    },
    {
      provide: CompassFieldComponents,
      useValue: CompassNumberControlComponent,
      multi: true
    },
    {
      provide: CompassFieldComponents,
      useValue: CompassSelectControlComponent,
      multi: true
    },
    {
      provide: CompassFieldComponents,
      useValue: CompassAutoCompleteControlComponent,
      multi: true
    },
    {
      provide: CompassFieldComponents,
      useValue: CompassRadioGroupControlComponent,
      multi: true
    },
    {
      provide: CompassFieldComponents,
      useValue: CompassTextareaControlComponent,
      multi: true
    },
    {
      provide: CompassFieldComponents,
      useValue: CompassDateControlComponent,
      multi: true
    },
    {
      provide: CompassFieldComponents,
      useValue: CompassDollarControlComponent,
      multi: true
    },
    {
      provide: CompassFieldComponents,
      useValue: CompassEstimatedDollarControlComponent,
      multi: true
    },
    {
      provide: CompassFieldComponents,
      useValue: CompassCheckboxControlComponent,
      multi: true
    },
    {
      provide: CompassFieldComponents,
      useValue: CompassHiddenControlComponent,
      multi: true
    }
  ],
  entryComponents: [
    CompassStringControlComponent,
    CompassNumberControlComponent,
    CompassSelectControlComponent,
    CompassAutoCompleteControlComponent,
    CompassRadioGroupControlComponent,
    CompassTextareaControlComponent,
    CompassDateControlComponent,
    CompassDollarControlComponent,
    CompassEstimatedDollarControlComponent,
    CompassCheckboxControlComponent,
    CompassHiddenControlComponent
  ]
})
export class CompassFormModule {}

import { NgModule } from '@angular/core';
import { CommonModule as NgCommon } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CompassStringControlComponent } from './compass-string-control/compass-string-control.component';
import { CompassNumberControlComponent } from './compass-number-control/compass-number-control.component';
import { CompassSelectControlComponent } from './compass-select-control/compass-select-control.component';
import { CompassAutoCompleteControlComponent } from './compass-auto-complete-control/compass-auto-complete-control.component';
import { CompassRadioGroupControlComponent } from './compass-radio-group-control/compass-radio-group-control.component';
import { CompassTextareaControlComponent } from './compass-textarea-control/compass-textarea-control.component';
import { CompassDateControlComponent } from './compass-date-control/compass-date-control.component';
import { CompassDollarControlComponent } from './compass-dollar-control/compass-dollar-control.component';
import { CompassEstimatedDollarControlComponent } from './compass-estimated-dollar-control/compass-estimated-dollar-control.component';
import { CompassCheckboxControlComponent } from './compass-checkbox-control/compass-checkbox-control.component';
import { CompassRichTextControlComponent } from './compass-rich-text-control/compass-rich-text-control.component';
import { CompassFormComponent } from './compass-form/compass-form.component';
import { CompassFormItemComponent } from './compass-form-item/compass-form-item.component';
import { MaterialModule } from './material.module';

const controlComponents = [
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
    CompassRichTextControlComponent,
];

@NgModule({
    declarations: [CompassFormComponent, CompassFormItemComponent, ...controlComponents],
    imports: [NgCommon, ReactiveFormsModule, FormsModule, MaterialModule],
    exports: [CompassFormComponent, CompassFormItemComponent],
    entryComponents: controlComponents,
})
export class CompassFormModule {}

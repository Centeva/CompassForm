import { Input, Component } from '@angular/core';
import { CompassTextareaControl } from './compass-textarea-control';
import { CompassForm } from '../compass-form';
import { ICompassComponent } from '../compass-control';
import { CompassComponent } from '../compass-form-control-to-component-map';

@CompassComponent(CompassTextareaControl)
@Component({
    templateUrl: './compass-textarea-control.component.html',
})
export class CompassTextareaControlComponent<ModelType> implements ICompassComponent<ModelType, string> {
    @Input()
    compassForm: CompassForm<ModelType>;
    @Input()
    compassControl: CompassTextareaControl<ModelType>;

    get snapshot() {
        return this.compassControl.snapshot;
    }
}

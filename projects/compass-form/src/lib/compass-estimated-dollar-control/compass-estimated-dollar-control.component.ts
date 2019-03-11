import { Input, Component } from '@angular/core';
import { CompassEstimatedDollarControl } from './compass-estimated-dollar-control';
import { ICompassComponent } from '../compass-control';
import { CompassForm } from '../compass-form';
import { CompassComponent } from '../compass-form-control-to-component-map';

@CompassComponent(CompassEstimatedDollarControl)
@Component({
    templateUrl: './compass-estimated-dollar-control.component.html',
})
export class CompassEstimatedDollarControlComponent<ModelType> implements ICompassComponent<ModelType, number> {
    @Input()
    compassForm: CompassForm<ModelType>;
    @Input()
    compassControl: CompassEstimatedDollarControl<ModelType>;

    get snapshot() {
        return this.compassControl.snapshot;
    }
}

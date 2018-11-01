import { Input, Component } from '@angular/core';
import { CompassSelectControl } from './compass-select-control';
import { ICompassComponent } from '../compass-control';
import { CompassForm } from '../compass-form';
import { CompassComponent } from '../compass-form-control-to-component-map';

@CompassComponent(CompassSelectControl)
@Component({
    templateUrl: './compass-select-control.component.html',
})
export class CompassSelectControlComponent<ModelType, T> implements ICompassComponent<ModelType, T> {
    @Input()
    compassForm: CompassForm<ModelType>;
    @Input()
    compassControl: CompassSelectControl<ModelType, T>;

    get snapshot() {
        return this.compassControl.snapshot;
    }
}

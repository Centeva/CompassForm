import { Input, Component } from '@angular/core';
import { ICompassComponent } from '../compass-control';
import { CompassDollarControl } from './compass-dollar-control';
import { CompassForm } from '../compass-form';
import { CompassComponent } from '../compass-form-control-to-component-map';

@CompassComponent(CompassDollarControl)
@Component({
    templateUrl: './compass-dollar-control.component.html',
})
export class CompassDollarControlComponent<ModelType> implements ICompassComponent<ModelType, number> {
    @Input()
    compassForm: CompassForm<ModelType>;
    @Input()
    compassControl: CompassDollarControl<ModelType>;

    get snapshot() {
        return this.compassControl.snapshot;
    }
}

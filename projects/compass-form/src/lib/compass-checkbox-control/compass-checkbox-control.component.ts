import { Input, Component } from '@angular/core';
import { CompassCheckboxControl } from './compass-checkbox-control';
import { ICompassComponent, CompassControl } from '../compass-control';
import { CompassForm } from '../compass-form';
import { CompassComponent } from '../compass-form-control-to-component-map';

@CompassComponent(CompassCheckboxControl)
@Component({
    templateUrl: './compass-checkbox-control.component.html',
})
export class CompassCheckboxControlComponent<ModelType> implements ICompassComponent<ModelType, boolean> {
    @Input()
    compassForm: CompassForm<ModelType>;
    @Input()
    compassControl: CompassCheckboxControl<ModelType>;

    get snapshot() {
        return this.compassControl.snapshot;
    }
}

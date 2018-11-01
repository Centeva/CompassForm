import { Input, Component } from '@angular/core';
import { CompassStringControl } from './compass-string-control';
import { ICompassComponent } from '../compass-control';
import { CompassForm } from '../compass-form';
import { CompassComponent } from '../compass-form-control-to-component-map';

@CompassComponent(CompassStringControl)
@Component({
    templateUrl: './compass-string-control.component.html',
})
export class CompassStringControlComponent<ModelType> implements ICompassComponent<ModelType, string> {
    @Input()
    compassForm: CompassForm<ModelType>;
    @Input()
    compassControl: CompassStringControl<ModelType>;

    get snapshot() {
        return this.compassControl.snapshot;
    }
}

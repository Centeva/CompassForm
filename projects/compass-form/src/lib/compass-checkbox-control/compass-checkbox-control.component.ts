import { Input, Component } from '@angular/core';
import { CompassCheckboxControl } from './compass-checkbox-control';
import { ICompassComponent, CompassControl } from '../compass-control';
import { CompassForm } from '../compass-form';

@Component({
    templateUrl: './compass-checkbox-control.component.html',
})
export class CompassCheckboxControlComponent<ModelType> implements ICompassComponent<ModelType, boolean> {

    static readonly type = 'checkbox'

    @Input()
    compassForm: CompassForm<ModelType>;
    @Input()
    compassControl: CompassCheckboxControl<ModelType>;

    get snapshot() {
        return this.compassControl.snapshot;
    }
}

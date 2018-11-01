import { Input, Component } from '@angular/core';
import { CompassCheckboxControl } from './compass-checkbox-control';
import { CompassComponent } from '../compass-control';
import { CompassForm } from '../compass-form';

@Component({
    templateUrl: './compass-checkbox-control.component.html',
})
export class CompassCheckboxControlComponent<ModelType> implements CompassComponent<ModelType, boolean> {
    @Input()
    compassForm: CompassForm<ModelType>;
    @Input()
    compassControl: CompassCheckboxControl<ModelType>;

    get snapshot() {
        return this.compassControl.snapshot;
    }
}

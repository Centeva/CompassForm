import { Input, Component } from '@angular/core';
import { CompassSelectControl } from './compass-select-control';
import { CompassComponent } from '../compass-control';
import { CompassForm } from '../compass-form';

@Component({
    templateUrl: './compass-select-control.component.html',
})
export class CompassSelectControlComponent<ModelType, T> implements CompassComponent<ModelType, T> {
    @Input()
    compassForm: CompassForm<ModelType>;
    @Input()
    compassControl: CompassSelectControl<ModelType, T>;

    get snapshot() {
        return this.compassControl.snapshot;
    }
}

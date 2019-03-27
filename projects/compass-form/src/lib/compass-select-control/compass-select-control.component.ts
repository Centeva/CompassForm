import { Input, Component } from '@angular/core';
import { CompassSelectControl } from './compass-select-control';
import { ICompassComponent } from '../compass-control';
import { CompassForm } from '../compass-form';
@Component({
    templateUrl: './compass-select-control.component.html',
})
export class CompassSelectControlComponent<ModelType, T> implements ICompassComponent<ModelType, T> {
    static readonly type = 'select'
    @Input()
    compassForm: CompassForm<ModelType>;
    @Input()
    compassControl: CompassSelectControl<ModelType, T>;

    get snapshot() {
        return this.compassControl.snapshot;
    }
}

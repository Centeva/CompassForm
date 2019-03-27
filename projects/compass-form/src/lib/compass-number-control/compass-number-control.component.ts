import { Input, Component } from '@angular/core';
import { CompassNumberControl } from './compass-number-control';
import { ICompassComponent } from '../compass-control';
import { CompassForm } from '../compass-form';
@Component({
    templateUrl: './compass-number-control.component.html',
})
export class CompassNumberControlComponent<ModelType> implements ICompassComponent<ModelType, number> {
    static readonly type = 'number'
    @Input()
    compassForm: CompassForm<ModelType>;
    @Input()
    compassControl: CompassNumberControl<ModelType>;

    get snapshot() {
        return this.compassControl.snapshot;
    }
}

import { Input, Component } from '@angular/core';
import { ICompassComponent } from '../compass-control';
import { CompassDollarControl } from './compass-dollar-control';
import { CompassForm } from '../compass-form';

@Component({
    templateUrl: './compass-dollar-control.component.html',
})
export class CompassDollarControlComponent<ModelType> implements ICompassComponent<ModelType, number> {

    static readonly type = "dollar"
    @Input()
    compassForm: CompassForm<ModelType>;
    @Input()
    compassControl: CompassDollarControl<ModelType>;

    get snapshot() {
        return this.compassControl.snapshot;
    }
}

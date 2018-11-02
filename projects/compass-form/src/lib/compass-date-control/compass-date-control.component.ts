import { Input, Component } from '@angular/core';
import moment from 'moment';
import { CompassDateControl } from './compass-date-control';
import { ICompassComponent } from '../compass-control';
import { CompassForm } from '../compass-form';
import { CompassComponent } from '../compass-form-control-to-component-map';

@CompassComponent(CompassDateControl)
@Component({
    templateUrl: './compass-date-control.component.html',
})
export class CompassDateControlComponent<ModelType> implements ICompassComponent<ModelType, moment.Moment> {
    @Input()
    compassForm: CompassForm<ModelType>;
    @Input()
    compassControl: CompassDateControl<ModelType>;

    get snapshot() {
        return this.compassControl.snapshot;
    }
}

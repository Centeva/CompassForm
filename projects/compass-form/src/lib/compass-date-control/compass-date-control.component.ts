import { Input, Component } from '@angular/core';
import moment from 'moment';
import { CompassDateControl } from './compass-date-control';
import { ICompassComponent } from '../compass-control';
import { CompassForm } from '../compass-form';

@Component({
    templateUrl: './compass-date-control.component.html',
})
export class CompassDateControlComponent<ModelType> implements ICompassComponent<ModelType, moment.Moment> {

    static readonly type = "date"
    @Input()
    compassForm: CompassForm<ModelType>;
    @Input()
    compassControl: CompassDateControl<ModelType>;

    get snapshot() {
        return this.compassControl.snapshot;
    }
}

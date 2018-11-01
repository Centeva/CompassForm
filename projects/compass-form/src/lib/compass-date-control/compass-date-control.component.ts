import { Input, Component } from '@angular/core';
import * as moment from 'moment';
import { CompassDateControl } from './compass-date-control';
import { CompassComponent } from '../compass-control';
import { CompassForm } from '../compass-form';

@Component({
    templateUrl: './compass-date-control.component.html',
})
export class CompassDateControlComponent<ModelType> implements CompassComponent<ModelType, moment.Moment> {
    @Input()
    compassForm: CompassForm<ModelType>;
    @Input()
    compassControl: CompassDateControl<ModelType>;

    get snapshot() {
        return this.compassControl.snapshot;
    }
}

import { Input, Component } from '@angular/core';
import { CompassRadioGroupControl } from './compass-radio-group-control';
import { CompassComponent } from '../compass-control';
import { CompassForm } from '../compass-form';

@Component({
    templateUrl: './compass-radio-group-control.component.html',
    styleUrls: ['./compass-radio-group-control.component.scss'],
})
export class CompassRadioGroupControlComponent<ModelType, T> implements CompassComponent<ModelType, T> {
    @Input()
    compassForm: CompassForm<ModelType>;
    @Input()
    compassControl: CompassRadioGroupControl<ModelType, T>;

    get snapshot() {
        return this.compassControl.snapshot;
    }
}

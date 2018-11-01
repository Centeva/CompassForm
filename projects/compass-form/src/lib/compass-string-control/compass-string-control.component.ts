import { Input, Component } from '@angular/core';
import { CompassStringControl } from './compass-string-control';
import { CompassComponent } from '../compass-control';
import { CompassForm } from '../compass-form';

@Component({
    templateUrl: './compass-string-control.component.html',
})
export class CompassStringControlComponent<ModelType> implements CompassComponent<ModelType, string> {
    @Input()
    compassForm: CompassForm<ModelType>;
    @Input()
    compassControl: CompassStringControl<ModelType>;

    get snapshot() {
        return this.compassControl.snapshot;
    }
}

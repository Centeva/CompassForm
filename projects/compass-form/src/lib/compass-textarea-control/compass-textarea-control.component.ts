import { Input, Component } from '@angular/core';
import { CompassTextareaControl } from './compass-textarea-control';
import { CompassComponent } from '../compass-control';
import { CompassForm } from '../compass-form';

@Component({
    templateUrl: './compass-textarea-control.component.html',
})
export class CompassTextareaControlComponent<ModelType> implements CompassComponent<ModelType, string> {
    @Input()
    compassForm: CompassForm<ModelType>;
    @Input()
    compassControl: CompassTextareaControl<ModelType>;

    get snapshot() {
        return this.compassControl.snapshot;
    }
}

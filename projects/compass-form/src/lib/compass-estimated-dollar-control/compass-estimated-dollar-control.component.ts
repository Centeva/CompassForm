import { Input, Component } from '@angular/core';
import { CompassEstimatedDollarControl } from './compass-estimated-dollar-control';
import { CompassComponent } from '../compass-control';
import { CompassForm } from '../compass-form';

@Component({
    templateUrl: './compass-estimated-dollar-control.component.html',
})
export class CompassEstimatedDollarControlComponent<ModelType> implements CompassComponent<ModelType, number> {
    @Input()
    compassForm: CompassForm<ModelType>;
    @Input()
    compassControl: CompassEstimatedDollarControl<ModelType>;

    get snapshot() {
        return this.compassControl.snapshot;
    }

    onKeypress(event: KeyboardEvent) {
        // Kill any scientific notation or decimal keystrokes normally permitted by number field
        if (event.key === 'e' || event.key === '+' || event.key === '-' || event.key === '.') {
            event.preventDefault();
            return;
        }
    }
}

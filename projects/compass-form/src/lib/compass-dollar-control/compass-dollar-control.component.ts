import { Input, Component } from '@angular/core';
import { CompassComponent } from '../compass-control';
import { CompassDollarControl } from './compass-dollar-control';
import { CompassForm } from '../compass-form';

@Component({
    templateUrl: './compass-dollar-control.component.html',
})
export class CompassDollarControlComponent<ModelType> implements CompassComponent<ModelType, number> {
    @Input()
    compassForm: CompassForm<ModelType>;
    @Input()
    compassControl: CompassDollarControl<ModelType>;

    get snapshot() {
        return this.compassControl.snapshot;
    }

    onKeypress(event: KeyboardEvent) {
        // Kill any scientific notation keystrokes normally permitted by number field
        if (event.key === 'e' || event.key === '+' || event.key === '-') {
            event.preventDefault();
            return;
        }
    }
}

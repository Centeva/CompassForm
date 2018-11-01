import { Component, Input, OnChanges } from '@angular/core';
import { CompassForm } from '../compass-form';
import { CompassControl } from '../compass-control';

@Component({
    selector: 'compass-form',
    templateUrl: './compass-form.component.html',
    styleUrls: ['./compass-form.component.scss'],
})
export class CompassFormComponent<T> implements OnChanges {
    @Input()
    compassForm: CompassForm<T>;

    @Input()
    ignoreControls: string[] = [];

    controls: CompassControl<T, any>[];

    ngOnChanges(): void {
        this.controls = this.compassForm.controlsArray.filter(x => !this.ignoreControls.some(p => p === x.key));
    }

    getStyle(control: CompassControl<T, any>) {
        return {
            width: control.snapshot.width,
            'flex-basis': control.snapshot.width,
            display: control.snapshot.display ? 'block' : 'none',
        };
    }
}

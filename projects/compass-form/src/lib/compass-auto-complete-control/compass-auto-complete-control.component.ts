import { Input, Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { CompassAutoCompleteControl } from './compass-auto-complete-control';
import { CompassComponent } from '../compass-control';
import { CompassForm } from '../compass-form';

@Component({
    templateUrl: './compass-auto-complete-control.component.html',
})
export class CompassAutoCompleteControlComponent<ModelType, T> implements CompassComponent<ModelType, T>, OnInit {
    @Input()
    compassForm: CompassForm<ModelType>;
    @Input()
    compassControl: CompassAutoCompleteControl<ModelType, T>;
    filteredOptions: Subject<{}>;
    lastPromise: Promise<{ label: string; value: T }[]>;

    ngOnInit() {
        this.filteredOptions = new Subject();
        const inputProcessor = debounce(async input => {
            if (typeof input !== 'string') { return; } // users can't type with objects
            const promise = this.compassControl.config.optionsProvider(input, this.compassForm.value);
            this.lastPromise = promise;
            const x = await promise;
            if (promise === this.lastPromise) {
                this.filteredOptions.next(x);
            }
        }, 100);
        this.compassControl.ngControl.valueChanges.subscribe(input => {
            this.filteredOptions.next([]);
            inputProcessor(input);
        });
    }

    get snapshot() {
        return this.compassControl.snapshot;
    }

    autoCompleteDisplay(options: any[], initialLabel: string) {
        return function(val) {
            if (val) {
                const option = options && options.find(x => x.value === val);
                return option ? option.label : initialLabel;
            }
        };
    }
}

function debounce(func, delay) {
    let timeoutId;
    return input => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func(input), delay);
    };
}

import { FormGroup } from '@angular/forms';
import { CompassControl } from './compass-control';

export type CompassFormConfig<ModelType> = { [PropType in keyof ModelType]: CompassControl<ModelType, ModelType[PropType]> };

export class CompassForm<T> {
    ngForm: FormGroup;
    propertyKeys: string[];
    controlsArray: CompassControl<T, any>[];

    constructor(public controls: CompassFormConfig<T>, formValidators?: any) {
        this.propertyKeys = Object.keys(controls);
        const ngFormConfig = {};
        this.propertyKeys.forEach((k, i) => {
            const c = controls[k] as CompassControl<T, any>;
            c.key = k;
            ngFormConfig[k] = controls[k].ngControl;
            if (c.config.sortOrder === undefined) {
                c.config.sortOrder = i * 0.001;
            }
        });
        this.ngForm = new FormGroup(ngFormConfig, formValidators);
        this.controlsArray = this.propertyKeys.map(x => controls[x]).sort((a, b) => a.config.sortOrder - b.config.sortOrder);
        this.updateItems();
        this.ngForm.valueChanges.subscribe(() => {
            this.updateItems();
        });
    }

    public updateItems() {
        const model = this.ngForm.getRawValue();
        this.propertyKeys.forEach(k => this.controls[k].update(model));
    }

    get valid(): boolean {
        return this.ngForm.valid || this.ngForm.disabled;
    }

    get value(): Partial<T> {
        return this.ngForm.getRawValue();
    }
}

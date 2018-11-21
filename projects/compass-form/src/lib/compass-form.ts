import { FormGroup } from '@angular/forms';
import { CompassControl } from './compass-control';

export type CompassFormConfig<ModelType> = { [PropType in keyof ModelType]: CompassControl<ModelType, ModelType[PropType]> };

export class CompassForm<T> {
    ngForm: FormGroup;
    controlsArray: CompassControl<T, any>[];

    constructor(public controls: CompassFormConfig<T>, formValidators?: any) {
        this.ngForm = new FormGroup({}, formValidators);
        this.controlsArray = [];
        Object.keys(controls).forEach((key, i) =>  {
          const control = controls[key];
          if (control.config.sortOrder === undefined) {
              control.config.sortOrder = i * 0.001;
          }
          this.addControlInternal(key, control);
        });

        this.sortControls();
        this.update();
        this.ngForm.valueChanges.subscribe(() => this.update());
    }

    private addControlInternal(key: string, control: CompassControl<T, any>) {
      control.key = key;
      this.ngForm.addControl(key, control.ngControl);
      this.controls[key] = control;
      this.controlsArray.push(control);
    }

    public addControl(key: string, control: CompassControl<T, any>) {
      this.addControlInternal(key, control);
      this.sortControls();
      this.update();
    }

    public update() {
        const model = this.ngForm.getRawValue();
        this.controlsArray.forEach(c => c.update(model));
    }

    get valid(): boolean {
        return this.ngForm.valid || this.ngForm.disabled;
    }

    get value(): Partial<T> {
        return this.ngForm.getRawValue();
    }

    private sortControls() {
      this.controlsArray.sort((a, b) => a.config.sortOrder - b.config.sortOrder);
    }
}

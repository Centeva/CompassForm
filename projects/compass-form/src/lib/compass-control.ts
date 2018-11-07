import { ValidatorFn, FormControl, Validators } from '@angular/forms';
import { Type } from '@angular/core';
import { CompassForm } from './compass-form';


export type ValueOrProvider<ModelType, T> = T | ((d: ModelType) => T);

export interface CompassControlConfig<ModelType, T> {
    initialValue?: T;
    label: ValueOrProvider<ModelType, string>;
    required?: ValueOrProvider<ModelType, boolean>;
    validators?: ValidatorFn[];
    errorMessage?: ValueOrProvider<any, string>;
    display?: ValueOrProvider<ModelType, boolean>;
    hint?: ValueOrProvider<ModelType, string>;
    width?: ValueOrProvider<ModelType, string>;
    sortOrder?: number;
    disabled?: ValueOrProvider<ModelType, boolean>;
}

export abstract class CompassControl<ModelType, T> {
    ngControl: FormControl;
    snapshot: any = {};
    requiredValidator: {
      validator: (field: any) => any;
      setEnabled(r: boolean): void;
    };
    key: string;
    constructor(public config: CompassControlConfig<ModelType, T>) {
        const c = this.config;

        c.validators = c.validators || [];
        if (c.required === true) {
            c.validators.push(Validators.required);
        }
        if (c.required instanceof Function) {
            this.requiredValidator = OptionalValidator(Validators.required);
            c.validators.push(this.requiredValidator.validator);
        }

        if (!c.errorMessage) {
            c.errorMessage = errors => {
                if (errors) {
                    const errorKey = Object.keys(errors)[0];
                    if (errorKey === 'required') { return 'Required'; }
                    if (errorKey === 'min') { return 'Minimal value is ' + errors[errorKey].min; }
                    if (errorKey === 'max') { return 'Max value is ' + errors[errorKey].max; }
                    if (errorKey === 'pattern') { return 'Incorrect format'; }
                    if (errorKey === 'maxLength') { return 'Max length is ' + errors[errorKey].maxLength; }
                    if (errorKey === 'invalidInteger') { return 'Value must be an integer'; }
                    if (errorKey === 'IsNumeric') { return 'Not a number'; }
                    return errors[Object.keys(errors)[0]];
                }
            };
        }
        if (c.display === undefined) {
            c.display = true;
        }
        this.ngControl = new FormControl(c.initialValue, c.validators);
    }

    update(model: ModelType) {
        const s = this.snapshot;
        const c = this.config;
        s.key = this.key;
        s.label = c.label instanceof Function ? c.label(model) : c.label;
        s.required = c.required instanceof Function ? c.required(model) : c.required;
        s.display = c.display instanceof Function ? c.display(model) : c.display;
        s.hint = c.hint instanceof Function ? c.hint(model) : c.hint;
        s.width = c.width instanceof Function ? c.width(model) : c.width;
        s.disabled = c.disabled instanceof Function ? c.disabled(model) : c.disabled;

        const errors = this.ngControl.errors;
        if (errors) {
            s.errorMessage = c.errorMessage instanceof Function ? c.errorMessage(errors) : c.errorMessage;
        } else {
            s.errorMessage = '';
        }

        if (s.display && !s.disabled) {
            if (this.ngControl.disabled) {
                this.ngControl.enable();
            }
        } else {
            if (this.ngControl.enabled) {
                this.ngControl.disable();
            }
        }

        if (c.required instanceof Function) {
            this.requiredValidator.setEnabled(s.required);
            this.ngControl.updateValueAndValidity({ emitEvent: false });
        }
    }

    addValidator(validator: ValidatorFn): void {
      const existingValidator = this.ngControl.validator;
      this.ngControl.setValidators(existingValidator ? [existingValidator, validator] : validator);
    }

}

export interface ICompassComponent<ModelType, T> {
    compassForm: CompassForm<ModelType>;
    compassControl: CompassControl<ModelType, T>;
}

function OptionalValidator(validator) {
    let enabled = false;
    return {
        setEnabled(r: boolean) {
            enabled = r;
        },
        validator: field => {
            return enabled ? validator(field) : null;
        },
    };
}

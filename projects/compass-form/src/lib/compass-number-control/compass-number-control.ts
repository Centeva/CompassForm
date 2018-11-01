
import { CompassNumberControlComponent } from './compass-number-control.component';
import { CompassControlConfig, ValueOrProvider, CompassControl } from '../compass-control';

interface CompassNumberControlConfig<ModelType> extends CompassControlConfig<ModelType, number> {
    min?: ValueOrProvider<ModelType, number>;
    max?: ValueOrProvider<ModelType, number>;
}

export class CompassNumberControl<ModelType> extends CompassControl<ModelType, number> {
    constructor(public config: CompassNumberControlConfig<ModelType>) {
        super(config);
        const ngc = this.ngControl;

        const isIntValidator = field => {
            const value = field.value;
            return !value || parseInt(value, 10) === parseFloat(value) ? null : { numberMustBeInteger: 'Value must be an integer' };
        };

        ngc.setValidators(ngc.validator ? [ngc.validator, isIntValidator] : isIntValidator);
    }

    update(model: ModelType) {
        super.update(model);
        const s = this.snapshot;
        const c = this.config;
        s.min = c.min instanceof Function ? c.min(model) : c.min;
        s.max = c.max instanceof Function ? c.max(model) : c.max;
    }

    getComponent() {
        return CompassNumberControlComponent;
    }
}

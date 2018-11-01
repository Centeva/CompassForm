
import { CompassControlConfig, ValueOrProvider, CompassControl } from '../compass-control';

interface CompassNumberControlConfig<ModelType> extends CompassControlConfig<ModelType, number> {
    min?: ValueOrProvider<ModelType, number>;
    max?: ValueOrProvider<ModelType, number>;
}

export class CompassNumberControl<ModelType> extends CompassControl<ModelType, number> {
    constructor(public config: CompassNumberControlConfig<ModelType>) {
        super(config);
        const ngc = this.ngControl;

        const numberValidator = field => {
            const value = field.value;
            if (value === null || value === undefined) { return null; }
            const s = this.snapshot;
            const num = parseInt(value, 10);
            if (num !== parseFloat(value)) { return { numberMustBeInteger: 'Value must be an integer' }; }
            if (s.min !== undefined && s.min > num) {
                return { min: { min: s.min } };
            }
            if (s.max !== undefined && s.max < num) {
                return { max: { max: s.max } };
            }
            return null;
        };

        ngc.setValidators(ngc.validator ? [ngc.validator, numberValidator] : numberValidator);
    }

    update(model: ModelType) {
        super.update(model);
        const s = this.snapshot;
        const c = this.config;
        s.min = c.min instanceof Function ? c.min(model) : c.min;
        s.max = c.max instanceof Function ? c.max(model) : c.max;
    }

}

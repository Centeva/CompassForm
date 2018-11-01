
import { ValueOrProvider, CompassControlConfig, CompassControl } from '../compass-control';

interface CompassDollarControlConfig<ModelType> extends CompassControlConfig<ModelType, number> {
    min?: ValueOrProvider<ModelType, number>;
    max?: ValueOrProvider<ModelType, number>;
}

export class CompassDollarControl<ModelType> extends CompassControl<ModelType, number> {
    constructor(public config: CompassDollarControlConfig<ModelType>) {
        super(config);

        this.ngControl.valueChanges.subscribe(value => {
            const valueTruncated = Math.floor(value * 100) / 100;
            if (valueTruncated !== value) {
                this.ngControl.setValue(valueTruncated, { emitEvent: false });
                this.ngControl.updateValueAndValidity({ emitEvent: false });
            }
        });
    }

    update(model: ModelType) {
        super.update(model);
        const s = this.snapshot;
        const c = this.config;
        s.min = c.min instanceof Function ? c.min(model) : c.min;
        s.max = c.max instanceof Function ? c.max(model) : c.max;
    }

}

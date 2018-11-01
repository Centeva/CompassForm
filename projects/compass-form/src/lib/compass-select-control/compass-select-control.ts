import { CompassControl, CompassControlConfig, ValueOrProvider } from '../compass-control';

interface CompassSelectControlConfig<ModelType, T> extends CompassControlConfig<ModelType, T> {
    options: ValueOrProvider<ModelType, { label: string; value: T }[]>;
}

export class CompassSelectControl<ModelType, T> extends CompassControl<ModelType, T> {
    constructor(public config: CompassSelectControlConfig<ModelType, T>) {
        super(config);
    }

    update(model: ModelType) {
        super.update(model);
        const s = this.snapshot;
        const c = this.config;
        s.options = c.options instanceof Function ? c.options(model) : c.options;
    }

}

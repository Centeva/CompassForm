import { CompassControlConfig, ValueOrProvider, CompassControl } from '../compass-control';

interface CompassRadioGroupControlConfig<ModelType, T> extends CompassControlConfig<ModelType, T> {
    options: ValueOrProvider<ModelType, { label: string; value: T }[]>;
    verticalDisplay?: ValueOrProvider<ModelType, boolean>;
}

export class CompassRadioGroupControl<ModelType, T> extends CompassControl<ModelType, T> {
    constructor(public config: CompassRadioGroupControlConfig<ModelType, T>) {
        super(config);
    }

    update(model: ModelType) {
        super.update(model);
        const s = this.snapshot;
        const c = this.config;
        s.options = c.options instanceof Function ? c.options(model) : c.options;
        s.verticalDisplay = c.verticalDisplay instanceof Function ? c.verticalDisplay(model) : c.verticalDisplay;
    }
}

import { CompassControlConfig, ValueOrProvider, CompassControl, LabelValue } from '../compass-control';

type materialColor = 'primary' | 'warn' | 'accent';
interface CompassRadioGroupControlConfig<ModelType, T> extends CompassControlConfig<ModelType, T> {
    options: ValueOrProvider<ModelType, LabelValue<T>[]>;
    verticalDisplay?: ValueOrProvider<ModelType, boolean>;
    color?: ValueOrProvider<ModelType, materialColor>;
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
        s.color = c.color instanceof Function ? c.color(model) : c.color;
    }
}

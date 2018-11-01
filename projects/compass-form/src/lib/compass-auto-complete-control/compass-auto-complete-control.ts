import { CompassAutoCompleteControlComponent } from './compass-auto-complete-control.component';
import { CompassControlConfig, CompassControl } from '../compass-control';

interface CompassAutoCompleteControlConfig<ModelType, T> extends CompassControlConfig<ModelType, T> {
    initialLabel?: string;
    optionsProvider: ((query: string, model: Partial<ModelType>) => Promise<{ label: string; value: T }[]>);
}

export class CompassAutoCompleteControl<ModelType, T> extends CompassControl<ModelType, T> {
    constructor(public config: CompassAutoCompleteControlConfig<ModelType, T>) {
        super(config);
    }

    update(model: ModelType) {
        super.update(model);
        const s = this.snapshot;
        const c = this.config;
        s.optionsProvider = c.optionsProvider;
        s.initialLabel = c.initialLabel;
    }

    getComponent() {
        return CompassAutoCompleteControlComponent;
    }
}

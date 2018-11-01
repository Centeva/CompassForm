import { CompassTextareaControlComponent } from './compass-textarea-control.component';
import { CompassControlConfig, CompassControl } from '../compass-control';
interface CompassTextareaControlConfig<ModelType> extends CompassControlConfig<ModelType, string> {}

export class CompassTextareaControl<ModelType> extends CompassControl<ModelType, string> {
    constructor(public config: CompassTextareaControlConfig<ModelType>) {
        super(config);
    }

    getComponent() {
        return CompassTextareaControlComponent;
    }
}

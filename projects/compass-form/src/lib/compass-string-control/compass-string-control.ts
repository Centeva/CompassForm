import { CompassStringControlComponent } from './compass-string-control.component';
import { CompassControl, CompassControlConfig } from '../compass-control';
interface CompassStringControlConfig<ModelType> extends CompassControlConfig<ModelType, string> {}

export class CompassStringControl<ModelType> extends CompassControl<ModelType, string> {
    constructor(public config: CompassStringControlConfig<ModelType>) {
        super(config);
    }

    getComponent() {
        return CompassStringControlComponent;
    }
}

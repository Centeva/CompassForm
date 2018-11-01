import { CompassControl, CompassControlConfig } from '../compass-control';
interface CompassStringControlConfig<ModelType> extends CompassControlConfig<ModelType, string> {}

export class CompassStringControl<ModelType> extends CompassControl<ModelType, string> {
    constructor(public config: CompassStringControlConfig<ModelType>) {
        super(config);
    }
}

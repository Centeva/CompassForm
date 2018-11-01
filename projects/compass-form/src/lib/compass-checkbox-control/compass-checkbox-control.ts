import { CompassControlConfig, CompassControl } from '../compass-control';
interface CompassCheckboxControlConfig<ModelType> extends CompassControlConfig<ModelType, boolean> {}

export class CompassCheckboxControl<ModelType> extends CompassControl<ModelType, boolean> {
    constructor(public config: CompassCheckboxControlConfig<ModelType>) {
        super(config);
    }

}

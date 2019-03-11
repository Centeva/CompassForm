import { CompassControlConfig, CompassControl } from "../compass-control";

interface CompassHiddenControlConfig<ModelType> extends CompassControlConfig<ModelType, any> {
	label: null;
	display: false;
}

export class CompassHiddenControl<ModelType> extends CompassControl<ModelType, any> {
	constructor(public config: CompassHiddenControlConfig<ModelType>) {
		super(config);
	}
}

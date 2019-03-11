import { Input, Component } from '@angular/core';
import { CompassHiddenControl } from './compass-hidden-control';
import { CompassComponent } from '../compass-form-control-to-component-map';
import { ICompassComponent } from '../compass-control';
import { CompassForm } from '../compass-form';

@CompassComponent(CompassHiddenControl)
@Component({
	template: '',
})
export class CompassHiddenControlComponent<ModelType> implements ICompassComponent<ModelType, string> {
	@Input()
	compassForm: CompassForm<ModelType>;
	@Input()
	compassControl: CompassHiddenControl<ModelType>;

	get snapshot() {
		return this.compassControl.snapshot;
	}
}

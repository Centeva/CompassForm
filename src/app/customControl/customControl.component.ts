import { Component, Input } from '@angular/core';
import { ICompassComponent, CompassForm, CompassControl } from 'projects/compass-form/src/public_api';
import { CustomControl } from './customControl';



@Component({
  templateUrl: './customControl.component.html',
})
export class CustomControlComponent<ModelType> implements ICompassComponent<ModelType, string> {

  static readonly type = 'custom'

  @Input()
  compassForm: CompassForm<ModelType>;
  @Input()
  compassControl: CompassControl<ModelType, string>;

  get snapshot() {
    return this.compassControl.snapshot;
}
}
